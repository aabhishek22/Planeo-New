import React from 'react';

function AddClusterForm({ onSubmit }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white text-lg mb-3">Name</label>
        <input
          type="text"
          placeholder="Cluster name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>
      
      <div>
        <label className="block text-white text-lg mb-3">Context</label>
        <select className="w-full bg-[#2C2E31] text-gray-500 rounded-lg px-4 py-3 appearance-none">
          <option>Select a config file</option>
          {/* Add options here */}
        </select>
      </div>

      <button 
        onClick={onSubmit}
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-3 rounded-lg mt-4 text-lg"
      >
        Add
      </button>
    </div>
  );
}

export default AddClusterForm; 