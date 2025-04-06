import React from 'react';

function AddEnvironmentForm({ onSubmit }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white text-lg mb-3">Name</label>
        <input
          type="text"
          placeholder="Environment name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>
      
      <div>
        <label className="block text-white text-lg mb-3">Cluster</label>
        <select className="w-full bg-[#2C2E31] text-gray-500 rounded-lg px-4 py-3 appearance-none">
          <option>Select a cluster</option>
          <option value="GCP Dev">GCP Dev</option>
          <option value="AWS Prod">AWS Prod</option>
          <option value="Azure Test">Azure Test</option>
        </select>
      </div>

      <div>
        <label className="block text-white text-lg mb-3">Namespace</label>
        <input
          type="text"
          placeholder="Namespace"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>

      <button 
        onClick={onSubmit}
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-3 rounded-lg mt-4 text-lg"
      >
        Add Environment
      </button>
    </div>
  );
}

export default AddEnvironmentForm; 