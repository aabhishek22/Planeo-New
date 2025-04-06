import React, { useState, useEffect } from 'react';

function EditEnvironmentForm({ onSubmit, environment }) {
  const [formData, setFormData] = useState({
    name: '',
    cluster: '',
    namespace: ''
  });

  useEffect(() => {
    if (environment) {
      setFormData({
        name: environment.name || '',
        cluster: environment.cluster || '',
        namespace: environment.namespace || ''
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
        <label className="block text-white text-lg mb-3">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Environment name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>
      
      <div>
        <label className="block text-white text-lg mb-3">Cluster</label>
        <select 
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 appearance-none"
        >
          <option value="">Select a cluster</option>
          <option value="GCP Dev">GCP Dev</option>
          <option value="AWS Prod">AWS Prod</option>
          <option value="Azure Test">Azure Test</option>
        </select>
      </div>

      <div>
        <label className="block text-white text-lg mb-3">Namespace</label>
        <input
          type="text"
          name="namespace"
          value={formData.namespace}
          onChange={handleChange}
          placeholder="Namespace"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-3 rounded-lg mt-4 text-lg"
      >
        Update Environment
      </button>
    </form>
  );
}

export default EditEnvironmentForm; 