import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useKanban } from '../context/KanbanContext';
import { Column } from '../components/kanban/Column';
import { TaskCard } from '../components/kanban/TaskCard';
import { SiStorybook } from "react-icons/si"; 

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

export function KanbanPage() {
  const {
    columns,
    setColumns,
    columnOrder,
    setColumnOrder
  } = useKanban();

  const [activeDragItem, setActiveDragItem] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragColumnId, setActiveDragColumnId] = useState(null);
  const [activeDragColumnColor, setActiveDragColumnColor] = useState(null);

  // Storybook URL'si
  const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/docs/sayfalar-kanban-görev-panosu--docs`;

  // dnd-kit sensörleri
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  // --- Sürükleme Fonksiyonları ---

  function onDragStart(event) {
    const { data } = event.active;
    const itemType = data.current?.type;

    if (itemType === 'Task') {
      setActiveDragItemType('Task');
      setActiveDragItem(data.current?.task);
      const columnId = data.current?.columnId;
      setActiveDragColumnId(columnId);
      setActiveDragColumnColor(columns[columnId].tagColor);
    } else if (itemType === 'Column') {
      setActiveDragItemType('Column');
      setActiveDragItem(data.current?.column);
    }
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;
    const isActiveTask = active.data.current?.type === 'Task';
    if (!isActiveTask) return;

    const isOverColumn = over.data.current?.type === 'Column';
    const isOverTask = over.data.current?.type === 'Task';

    if (isOverColumn || isOverTask) {
      const activeId = active.id;
      const overId = over.id;
      const activeColumnId = active.data.current.columnId;
      const overColumnId = isOverTask ? over.data.current.columnId : overId;

      if (activeColumnId !== overColumnId) {
        setColumns((prev) => {
          const activeColumnTasks = prev[activeColumnId].tasks;
          const taskIndex = activeColumnTasks.findIndex(t => t.id === activeId);
          const task = activeColumnTasks[taskIndex];
          if (!task) return prev;
          const newActiveColumnTasks = activeColumnTasks.filter(t => t.id !== activeId);
          const overColumnTasks = prev[overColumnId].tasks;
          const newOverColumnTasks = [...overColumnTasks];
          
          if (isOverTask) {
            const overTaskIndex = overColumnTasks.findIndex(t => t.id === overId);
            newOverColumnTasks.splice(overTaskIndex, 0, task);
          } else {
            newOverColumnTasks.push(task);
          }
          active.data.current.columnId = overColumnId;
          return {
            ...prev,
            [activeColumnId]: { ...prev[activeColumnId], tasks: newActiveColumnTasks },
            [overColumnId]: { ...prev[overColumnId], tasks: newOverColumnTasks },
          };
        });
      }
    }
  }

  function onDragEnd(event) {
    setActiveDragItem(null);
    setActiveDragItemType(null);
    setActiveDragColumnId(null);
    setActiveDragColumnColor(null);

    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    if (active.data.current?.type === 'Column') {
      const activeIndex = columnOrder.findIndex(id => id === active.id);
      const overIndex = columnOrder.findIndex(id => id === over.id);
      setColumnOrder(arrayMove(columnOrder, activeIndex, overIndex));
      return;
    }

    if (active.data.current?.type === 'Task') {
      const activeColumnId = active.data.current.columnId;
      const overColumnId = over.data.current?.type === 'Task' 
        ? over.data.current.columnId
        : over.data.current?.type === 'Column' ? over.id : null;
      if (!overColumnId || activeColumnId !== overColumnId) {
        return;
      }
      const activeIndex = columns[activeColumnId].tasks.findIndex(t => t.id === active.id);
      const overIndex = columns[activeColumnId].tasks.findIndex(t => t.id === over.id);
      if (activeIndex === -1 || overIndex === -1) return;
      setColumns(prev => {
        const newTasks = arrayMove(prev[activeColumnId].tasks, activeIndex, overIndex);
        return {
          ...prev,
          [activeColumnId]: { ...prev[activeColumnId], tasks: newTasks }
        };
      });
    }
  }

  // --- JSX Render ---
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div className="relative min-h-screen p-8 text-white bg-black">
        
        {/* Storybook butonu */}
        <a 
          href={storybookUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute z-20 flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-800 rounded-lg top-8 right-8 hover:bg-gray-700" 
          title="Storybook'u Aç"
        >
          <SiStorybook className="text-xl text-pink-500" />
          <span className="hidden sm:inline">Storybook</span>
        </a>

        {/* Mevcut içerik */}
        <Link to="/" className="inline-block px-4 py-2 mb-8 text-white bg-gray-800 rounded-lg hover:bg-gray-700">
          ← Ana Sayfa
        </Link>
        <h1 className="mb-12 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Kanban Görev Panosu
        </h1>

        {/* Kolonların Sıralanabilir Alanı */}
        <div className="flex justify-center gap-4 p-4 overflow-x-auto">
          <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
            {columnOrder.map(colId => (
              <Column
                key={colId}
                column={columns[colId]}
              />
            ))}
          </SortableContext>
        </div>
      </div>

      {/* Sürükleme "Hayaleti" (Drag Overlay) */}
      <DragOverlay>
        {activeDragItemType === 'Column' && (
          <Column column={activeDragItem} />
        )}
        {activeDragItemType === 'Task' && (
          <TaskCard 
            task={activeDragItem} 
            columnId={activeDragColumnId} 
            columnTagColor={activeDragColumnColor}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}