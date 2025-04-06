import React, { useState } from 'react';
import Modal from '../components/Modal';
import AddClusterForm from '../components/AddClusterForm';
import Table from '../components/Table';
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import EditClusterForm from '../components/EditClusterForm';

function Clusters() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCluster, setSelectedCluster] = useState(null);
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

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [clusterToDelete, setClusterToDelete] = useState(null);

    // ... existing code ...

    const toggleDeleteModal = (cluster = null) => {
        setClusterToDelete(cluster);
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const handleDeleteConfirm = () => {
        console.log('Deleting cluster:', clusterToDelete);
        // Handle actual deletion here
        toggleDeleteModal();
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleEditModal = (cluster = null) => {
        setSelectedCluster(cluster);
        setIsEditModalOpen(!isEditModalOpen);
    };

    const handleAddCluster = () => {
        // Handle form submission
        toggleModal();
    };

    
    const handleEditCluster = (updatedData) => {
        console.log('Updated cluster data:', updatedData);
        // Handle the update logic here
        toggleEditModal();
    };

    const handleDeleteCluster = (cluster) => {
        // Handle cluster deletion
        console.log('Delete cluster:', cluster);
        toggleDeleteModal();

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

            {/* Add Cluster Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                title="Add Cluster"
            >
                <AddClusterForm onSubmit={handleAddCluster} />
            </Modal>

            {/* Edit Cluster Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={toggleEditModal}
                title="Edit Cluster"
            >
                <EditClusterForm 
                    onSubmit={handleEditCluster}
                    cluster={selectedCluster}
                />
            </Modal>

            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search Clusters"
                    className="w-full bg-gray-800 rounded-md px-4 py-2 pl-10 border border-gray-700"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
            </div>
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={toggleDeleteModal}
                title="Remove Cluster"
            >
                <div className="text-center">
                    <p className="text-white text-lg mb-8">
                        Are you sure you want to remove this cluster?
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

            <Table 
                columns={['Name', 'Path', 'Context', 'Action']}
                data={clusters}
                onDelete={handleDeleteCluster}
                onEdit={toggleEditModal}
            />
        </div>
    );
}

export default Clusters; 