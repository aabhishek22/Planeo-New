import React, { useState } from 'react';

function Clusters() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const clusters = [
    {
        name: 'GCP Dev',
        path: '~/kube/config',
        context: 'gcp-us-west-1-dev',
        status: 'active'
      },
      {
        name: 'AWS Prod',
        path: '~/aws/config',
        context: 'aws-us-east-1-prod',
        status: 'active'
      },
      {
        name: 'Azure Test',
        path: '~/azure/config',
        context: 'azure-eu-west-1-test',
        status: 'inactive'
      },
      {
        name: 'Local Dev',
        path: '~/.kube/config',
        context: 'docker-desktop',
        status: 'active'
      },
      {
        name: 'EKS Staging',
        path: '~/eks/config',
        context: 'eks-eu-central-1-staging',
        status: 'active'
      },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Clusters</h1>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Add Cluster
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1C1E21] p-8 rounded-lg w-[500px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-2xl font-semibold">Add Cluster</h2>
              <button onClick={toggleModal} className="text-gray-400 hover:text-white text-2xl">
                ×
              </button>
            </div>
            
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

              <button className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-3 rounded-lg mt-4 text-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Clusters"
          className="w-full bg-gray-800 rounded-md px-4 py-2 pl-10"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-center p-4 text-white">Name</th>
              <th className="text-center p-4 text-white">Path</th>
              <th className="text-center p-4 text-white">Context</th>
              <th className="text-center p-4 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {clusters.map((cluster) => (
              <tr key={cluster.name} className="hover:bg-gray-700">
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <div className="w-2 h-2 rounded-full bg-green-500 text-white"></div>
                    {cluster.name}
                  </div>
                </td>
                <td className="p-4 text-white text-center">{cluster.path}</td>
                <td className="p-4 text-white text-center">{cluster.context}</td>
                <td className="p-4 text-white text-center">
                  <button className="text-white hover:text-white">
                    <span>🗑</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clusters; 