import React, { createContext, useState, useContext } from 'react';

const initialData = {
  columns: {
    'todo': {
      id: 'todo',
      title: 'Yapılacaklar',
      tagColor: 'bg-red-600',
      tasks: [
        { id: '1', content: 'Komut Paleti UI\'ını tasarla' },
        { id: '2', content: 'Global state\'i bağla' },
      ],
    },
    'inProgress': {
      id: 'inProgress',
      title: 'Yapılanlar',
      tagColor: 'bg-yellow-600',
      tasks: [
        { id: '3', content: 'API güvenliğini araştır' },
      ],
    },
    'done': {
      id: 'done',
      title: 'Yapılmışlar',
      tagColor: 'bg-green-600',
      tasks: [
        { id: '4', content: 'Alışveriş sepeti context\'ini oluştur' },
      ],
    },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};

const KanbanContext = createContext(undefined);

export const KanbanProvider = ({ children }) => {
  const [columns, setColumns] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);

  const addTask = (columnId, content) => {
    const newTaskId = `${Date.now()}`;
    const newTask = { id: newTaskId, content };

    setColumns((prev) => {
      const column = prev[columnId];
      const newTasks = [...column.tasks, newTask];
      return {
        ...prev,
        [columnId]: {
          ...column,
          tasks: newTasks,
        },
      };
    });
  };

  const value = {
    columns,
    setColumns,
    columnOrder,
    setColumnOrder,
    addTask,
  };

  return (
    <KanbanContext.Provider value={value}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = () => {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error('useKanban, KanbanProvider içinde kullanılmalıdır');
  }
  return context;
};