import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddEnvironmentForm from '../components/AddEnvironmentForm';
import EditEnvironmentForm from '../components/EditEnvironmentForm';
import Table from '../components/Table';
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function Environments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [environmentToDelete, setEnvironmentToDelete] = useState(null);

  const environments = [
    {
      name: 'dev-1',
      cluster: 'GCP Dev',
      namespace: 'planeo-testuser-dev-1',
      status: 'active'
    },
    {
      name: 'dev-1',
      cluster: 'GCP Dev',
      namespace: 'planeo-testuser-dev-1',
      status: 'active'
    },
    {
      name: 'dev-1',
      cluster: 'GCP Dev',
      namespace: 'planeo-testuser-dev-1',
      status: 'inactive'
    }
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEditModal = (environment = null) => {
    setSelectedEnvironment(environment);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = (environment = null) => {
    setEnvironmentToDelete(environment);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleAddEnvironment = () => {
    // Handle form submission
    toggleModal();
  };

  const handleEditEnvironment = (updatedData) => {
    console.log('Updated environment data:', updatedData);
    // Handle the update logic here
    toggleEditModal();
  };

  const handleDeleteConfirm = () => {
    console.log('Deleting environment:', environmentToDelete);
    // Handle actual deletion here
    toggleDeleteModal();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Environments</h1>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Create Environment
        </button>
      </div>

      {/* Add Environment Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title="Create Environment"
      >
        <AddEnvironmentForm onSubmit={handleAddEnvironment} />
      </Modal>

      {/* Edit Environment Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        title="Edit Environment"
      >
        <EditEnvironmentForm 
          onSubmit={handleEditEnvironment}
          environment={selectedEnvironment}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        title="Remove Environment"
      >
        <div className="text-center">
          <p className="text-white text-lg mb-8">
            Are you sure you want to remove this environment?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDeleteConfirm}
              className="bg-[#6366F1] hover:bg-[#5558E6] text-white px-8 py-2 rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={toggleDeleteModal}
              className="bg-[#6366F1] hover:bg-[#5558E6] text-white px-8 py-2 rounded-lg"
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Environments"
          className="w-full bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      <Table 
        columns={['Name', 'Cluster', 'Namespace', 'Action']}
        data={environments}
        onDelete={toggleDeleteModal}
        onEdit={toggleEditModal}
      />
    </div>
  );
}

export default Environments; 