import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-[#1C1E21] p-8 rounded-lg w-[500px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-slideUp">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-2xl font-semibold">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal; 