import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddEnvironmentForm from "../components/AddEnvironmentForm";
import EditEnvironmentForm from "../components/EditEnvironmentForm";
import Table from "../components/Table";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function Environments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [environmentToDelete, setEnvironmentToDelete] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [foundedDataList, setFoundDataList] = useState([]);

  const environments = [
    {
      name: "dev-1",
      cluster: "GCP Dev",
      namespace: "planeo-testuser-dev-1",
      status: "active",
    },
    {
      name: "dev-2",
      cluster: "GCP Dev",
      namespace: "planeo-testuser-dev-2",
      status: "active",
    },
    {
      name: "dev-3",
      cluster: "GCP Dev",
      namespace: "planeo-testuser-dev-3",
      status: "inactive",
    },
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
    console.log("Updated environment data:", updatedData);
    // Handle the update logic here
    toggleEditModal();
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting environment:", environmentToDelete);
    // Handle actual deletion here
    toggleDeleteModal();
  };

  const findingValue = () => {
    const foundValue = environments.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.namespace.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.cluster.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFoundDataList(foundValue);
  };

  useEffect(() => {
    findingValue();
  }, [searchValue]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        {/* <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Environments</h1>
        </div> */}
        {/* <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Create Environment
        </button> */}
      </div>

      <h1 className=" text-3xl font-semibold text-white my-10">Environment</h1>

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

      <div className=" flex items-center justify-between mb-6">
        <div className="relative  ">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Environments"
            className=" bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700 w-[400px]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Create Environments
        </button>
      </div>

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

      {/* <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Environments"
          className="w-1/4 bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div> */}

      <Table
        columns={["Name", "Cluster", "Namespace", "Action"]}
        data={foundedDataList.length > 0 ? foundedDataList : environments}
        onDelete={toggleDeleteModal}
        onEdit={toggleEditModal}
      />
    </div>
  );
}

export default Environments;
