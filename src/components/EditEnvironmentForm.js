import React, { useState, useEffect } from 'react';

function EditEnvironmentForm({ onSubmit, environment }) {
  const [formData, setFormData] = useState({
    name: '',
    usage: '',
    cluster: ''
  });

  useEffect(() => {
    if (environment) {
      setFormData({
        name: environment.name || '',
        usage: environment.usage || '',
        cluster: environment.cluster || ''
      });
    }
  }, [environment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white text-sm mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Environment name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>
      
      <div>
        <label className="block text-white text-sm mb-2">Usage</label>
        <select 
          name="usage"
          value={formData.usage}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 border border-gray-700 appearance-none"
        >
          <option value="">Select a type</option>
          <option value="development">Development</option>
          <option value="staging">Staging</option>
          <option value="production">Production</option>
        </select>
      </div>

      <div>
        <label className="block text-white text-sm mb-2">Cluster</label>
        <select 
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 border border-gray-700 appearance-none"
        >
          <option value="">Select a cluster</option>
          <option value="GCP Dev">GCP Dev</option>
          <option value="AWS Prod">AWS Prod</option>
          <option value="Azure Test">Azure Test</option>
        </select>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-2 rounded-lg mt-4"
      >
        Update
      </button>
    </form>
  );
}

export default EditEnvironmentForm; 