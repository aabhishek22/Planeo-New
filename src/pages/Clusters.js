import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddClusterForm from "../components/AddClusterForm";
import Table from "../components/Table";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import EditClusterForm from "../components/EditClusterForm";

function Clusters() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [foundedDataList, setFoundDataList] = useState([]);
  const clusters = [
    {
      name: "GCP Dev",
      path: "~/kube/config",
      context: "gcp-us-west-1-dev",
      status: "active",
    },
    {
      name: "AWS Prod",
      path: "~/aws/config",
      context: "aws-us-east-1-prod",
      status: "active",
    },
    {
      name: "Azure Test",
      path: "~/azure/config",
      context: "azure-eu-west-1-test",
      status: "inactive",
    },
    {
      name: "Local Dev",
      path: "~/.kube/config",
      context: "docker-desktop",
      status: "active",
    },
    {
      name: "EKS Staging",
      path: "~/eks/config",
      context: "eks-eu-central-1-staging",
      status: "active",
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
    console.log("Deleting cluster:", clusterToDelete);
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
    console.log("Updated cluster data:", updatedData);
    // Handle the update logic here
    toggleEditModal();
  };

  const handleDeleteCluster = (cluster) => {
    // Handle cluster deletion
    console.log("Delete cluster:", cluster);
    toggleDeleteModal();
  };

  const findingValue = () => {
    const foundValue = clusters.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.context.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.path.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFoundDataList(foundValue);
  };

  useEffect(() => {
    findingValue();
  }, [searchValue]);

  return (
    <div className="p-8">
      {/* <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Clusters</h1>
        </div>
      </div> */}

      <h1 className="text-3xl font-semibold text-white my-10 ">Cluster</h1>
      {/* <p className="text-white mb-8 px-8">Overview of your environments</p> */}

      {/* Add Cluster Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Add Cluster">
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

      <div className=" flex items-center justify-between mb-6">
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Clusters"
            className=" bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700 w-[400px]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Add Cluster
        </button>
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
        columns={["Name", "Path", "Context", "Action"]}
        data={foundedDataList.length > 0 ? foundedDataList : clusters}
        onDelete={handleDeleteCluster}
        onEdit={toggleEditModal}
      />
    </div>
  );
}

export default Clusters;
