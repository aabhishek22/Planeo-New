import React, { useState, useEffect } from 'react';

function EditClusterForm({ onSubmit, cluster }) {
  const [formData, setFormData] = useState({
    name: '',
    path: '',
    context: ''
  });

  useEffect(() => {
    if (cluster) {
      setFormData({
        name: cluster.name || '',
        path: cluster.path || '',
        context: cluster.context || ''
      });
    }
  }, [cluster]);

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
          placeholder="Cluster name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>
      
      <div>
        <label className="block text-white text-lg mb-3">Path</label>
        <input
          type="text"
          name="path"
          value={formData.path}
          onChange={handleChange}
          placeholder="Config file path"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-white text-lg mb-3">Context</label>
        <select 
          name="context"
          value={formData.context}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-3 appearance-none"
        >
          <option value="">Select a config file</option>
          <option value="docker-desktop">docker-desktop</option>
          <option value="gcp-us-west-1-dev">gcp-us-west-1-dev</option>
          <option value="aws-us-east-1-prod">aws-us-east-1-prod</option>
        </select>
      </div>

      <button 
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-3 rounded-lg mt-4 text-lg"
      >
        Update Cluster
      </button>
    </form>
  );
}

export default EditClusterForm; 