import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Modal from "../components/Modal";
import AddStackForm from "../components/AddStackForm";
import EditStackForm from "../components/EditStackForm";

function Stacks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [environmentToDelete, setEnvironmentToDelete] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [foundedDataList, setFoundDataList] = useState([]);

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
  const environments = [
    {
      name: "myapp-service",
      environment: "dev-1",
      template: "demo-app",
      releaseName: "myappservice",

      status: "active",
    },
    {
      name: "myapp-service",
      environment: "dev-2",
      template: "demo-app",
      releaseName: "myappservice",
      status: "active",
    },
    {
      name: "myapp-service",
      environment: "dev-3",
      template: "demo-app",
      releaseName: "myappservice",

      status: "inactive",
    },
  ];

  const handleAddStack = () => {
    // Handle form submission
    toggleModal();
  };

  const handleEditStack = (updatedData) => {
    console.log("Updated environment data:", updatedData);
    // Handle the update logic here
    toggleEditModal();
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting Stack:", environmentToDelete);
    // Handle actual deletion here
    toggleDeleteModal();
  };

  const findingValue = () => {
    const foundValue = environments.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.releaseName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.environment.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.template.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFoundDataList(foundValue);
  };

  useEffect(() => {
    findingValue();
  }, [searchValue]);

  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-bold">Templates</h1> */}
      {/* Add your templates content here */}
      <div className="flex justify-between items-center mb-6">
        {/* <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Stacks</h1>
        </div> */}
        {/* <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Create Stacks
        </button> */}
      </div>

      <h1 className="text-3xl font-semibold text-white my-10 ">Stacks</h1>

      {/* <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Stacks"
          className="w-1/4 bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div> */}

      <div className=" flex items-center justify-between mb-6">
        <div className="relative  ">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Stacks"
            className=" bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700 w-[400px]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Add Stacks
        </button>
      </div>
      {/* Edit Environment Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        title="Edit Stacks"
      >
        <EditStackForm
          onSubmit={handleEditStack}
          templatesData={selectedEnvironment}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        title="Remove Stack"
      >
        <div className="text-center">
          <p className="text-white text-lg mb-8">
            Are you sure you want to remove this Stack?
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

      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Create Stack">
        <AddStackForm onSubmit={handleAddStack} />
      </Modal>

      <Table
        columns={["Name", "Environment", "Template", "Release name", "Action"]}
        data={foundedDataList.length > 0 ? foundedDataList : environments}
        onDelete={toggleDeleteModal}
        onEdit={toggleEditModal}
      />
    </div>
  );
}

export default Stacks;
