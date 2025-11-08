import React from 'react';
import { motion } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const TaskCard = ({ task, columnId, columnTagColor }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task: task,
      columnId: columnId,
    }
  });

  // dnd-kit'in sürükleme için ürettiği CSS stilleri
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };


  const isDoneColumn = columnId === 'done';

  const cardClasses = `
    p-3 rounded-lg shadow-sm cursor-grab active:cursor-grabbing
    transition-colors duration-200
    ${isDoneColumn
      ? 'bg-emerald-800 border border-emerald-700 text-emerald-100 hover:bg-emerald-700' 
      : 'bg-gray-800 border border-gray-700 text-gray-100 hover:bg-gray-700'
    }
  `;

  
  if (isDragging) {
    
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`${cardClasses} opacity-50`}
      />
    );
  }

  return (
    <motion.div
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners} 
      
      // Framer Motion animasyonları
      layout 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      
      className={cardClasses}
    >
      <p className="text-sm whitespace-pre-wrap">{task.content}</p>
    </motion.div>
  );
};