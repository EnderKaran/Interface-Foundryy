import React, { useState, useMemo } from 'react';
import { TaskCard } from './TaskCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useKanban } from '../../context/KanbanContext';
import { FaGripVertical } from "react-icons/fa";

function useCombinedRefs(...refs) {
  return useMemo(() => (element) => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    });
  }, [refs]);
}

export const Column = ({ column }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');
  const { addTask } = useKanban();

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: column.id,
    data: { type: 'Column' }
  });

  const {
    attributes,
    listeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column: column,
    }
  });

  const combinedRefs = useCombinedRefs(setDroppableRef, setSortableRef);

  const style = {
    transition,
    transform: transform ? `translate3d(${transform.x}px, 0, 0)` : undefined,
  };
  
  const taskIds = column.tasks.map(task => task.id);

  const handleAddTask = () => {
    if (newTaskContent.trim() === '') return setIsAddingTask(false);
    addTask(column.id, newTaskContent);
    setNewTaskContent('');
    setIsAddingTask(false);
  };

  const handleCancelAddTask = () => {
    setNewTaskContent('');
    setIsAddingTask(false);
  };

  return (
    <div 
      ref={combinedRefs} 
      style={style} 
      className={`
        flex flex-col max-h-[90vh]
        bg-gray-950 rounded-lg
        
        /* DEĞİŞİKLİK: 
          - Kolon genişliği mobil için daraltıldı ('w-64')
          - Ekran büyüdükçe kademeli olarak genişletildi.
        */
        w-64 sm:w-72 md:w-80
        
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isOver ? 'ring-2 ring-teal-500' : ''}
      `}
    >
      {/* Kolon Başlığı */}
      <h3 
        {...attributes}
        {...listeners}
        className="flex items-center justify-between p-4 text-lg font-bold text-white cursor-grab active:cursor-grabbing"
      >
        <span className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-md text-xs font-medium text-white ${column.tagColor}`}>
            {column.title}
          </span>
          <span className="text-sm font-normal text-gray-400">
            {column.tasks.length}
          </span>
        </span>
        <FaGripVertical className="text-gray-500" />
      </h3>
      
      {/* Görev Listesi Alanı */}
      <div className="flex flex-col flex-shrink min-h-0 gap-3 p-4 pt-0 overflow-y-auto">
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          <motion.div layout className="flex flex-col gap-3">
            <AnimatePresence>
              {column.tasks.map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  columnId={column.id}
                  columnTagColor={column.tagColor} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </SortableContext>
      </div>

      {/* Görev Ekleme UI Alanı */}
      <div className="p-4 pt-2 mt-auto">
        {isAddingTask ? (
          <div className="flex flex-col gap-2">
            <textarea
              value={newTaskContent}
              onChange={(e) => setNewTaskContent(e.target.value)}
              placeholder="Görev içeriğini girin..."
              rows={3}
              autoFocus
              className="w-full p-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={handleAddTask}
                className="flex-grow px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                Görevi Kaydet
              </button>
              <button
                onClick={handleCancelAddTask}
                className="px-4 py-2 text-sm text-gray-300 bg-gray-600 rounded-md hover:bg-gray-700"
              >
                İptal
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAddingTask(true)}
            className="w-full px-2 py-1 text-sm font-medium text-gray-400 rounded-md hover:text-white"
          >
            + Yeni Görev Ekle
          </button>
        )}
      </div>
    </div>
  );
};