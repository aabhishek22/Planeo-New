import React, { useState } from "react";
import Table from "../components/Table";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Modal from "../components/Modal";
import AddTemplateForm from "../components/AddTemplateForm";
import EditTemplateForm from "../components/EditTemplateForm";

function Templates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [environmentToDelete, setEnvironmentToDelete] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const templatesData = [
    {
      name: "demo-app",
      source: "https://helm.github.io/examples",
      repository: "examples",
      chart: "hello-world",

      status: "active",
    },
    {
      name: "demo-app",
      source: "https://helm.github.io/examples",
      repository: "examples",
      chart: "hello-world",
      status: "active",
    },
    {
      name: "demo-app",
      source: "https://helm.github.io/examples",
      repository: "examples",
      chart: "hello-world",

      status: "inactive",
    },
  ];

  const toggleEditModal = (templatesData = null) => {
    setSelectedTemplate(templatesData);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = (templatesData = null) => {
    setEnvironmentToDelete(templatesData);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleAddTemplate = () => {
    // Handle form submission
    toggleModal();
  };

  const handleEditTemplate = (updatedData) => {
    console.log("Updated environment data:", updatedData);
    // Handle the update logic here
    toggleEditModal();
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting template:", environmentToDelete);
    // Handle actual deletion here
    toggleDeleteModal();
  };

  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-bold">Templates</h1> */}
      {/* Add your templates content here */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Templates</h1>
        </div>
        <button
          onClick={toggleModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span>+</span> Add Templates
        </button>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Templates"
          className="w-1/4 bg-[#2F3039] rounded-md px-4 py-2 pl-10 border border-gray-700"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      {/* Edit Environment Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        title="Edit Template"
      >
        <EditTemplateForm
          onSubmit={handleEditTemplate}
          templatesData={selectedTemplate}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        title="Remove Template"
      >
        <div className="text-center">
          <p className="text-white text-lg mb-8">
            Are you sure you want to remove this Template?
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

      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Add Template">
        <AddTemplateForm onSubmit={handleAddTemplate} />
      </Modal>

      <Table
        columns={["Name", "Source", "Repository", "Chart", "Action"]}
        data={templatesData}
        onDelete={toggleDeleteModal}
        onEdit={toggleEditModal}
      />
    </div>
  );
}

export default Templates;
