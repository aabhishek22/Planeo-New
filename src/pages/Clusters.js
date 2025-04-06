import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddClusterForm from '../components/AddClusterForm';

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

  const handleAddCluster = () => {
    // Handle form submission
    toggleModal();
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

      {/* Using the Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title="Add Cluster"
      >
        <AddClusterForm onSubmit={handleAddCluster} />
      </Modal>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Clusters"
          className="w-full bg-gray-800 rounded-md px-4 py-2 pl-10 border border-gray-700"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <table className="w-full ">
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