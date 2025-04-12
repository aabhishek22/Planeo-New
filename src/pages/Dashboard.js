import React, { useState } from "react";
import { BsGrid, BsWindow } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import WelcomeNote from "../components/WelcomeNote";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recentActivities = [
    {
      icon: "🚀",
      title: "Release complete on namespace dev-1",
      time: "2 mins ago",
    },
    {
      icon: "📄",
      title: "Template demo-app added",
      time: "12 mins ago",
    },
    {
      icon: "🔧",
      title: "Creating environment dev-2",
      time: "1 hour ago",
    },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="flex items-center gap-3 text-white mb-6  px-8">
        {/* <Link to="/" className="hover:text-white flex items-center gap-2">
          <span>←</span>
          <span>Back</span>
        </Link>
        <span className="text-white">|</span>
        <span>Dashboard</span> */}
      </div>

      <h1 className="text-3xl font-semibold text-white my-10 ml-7">Dashboard</h1>
      <p className="text-white mb-8 px-8">Overview of your environments</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8 px-8">
        <div className="bg-[#2F3038] rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Total Clusters</span>
            {/* <BsGrid className="text-xl text-white" /> */}
            <img src="/icons/cluster.svg" alt="Dashboard" className="w-6 h-6" />
          </div>
          <div className="text-white text-4xl font-bold">6</div>
        </div>

        <div className="bg-[#2F3038] rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Total Environments</span>
            {/* <BsWindow className="text-xl text-white" /> */}
            <img
              src="/icons/environments.svg"
              alt="Dashboard"
              className="w-6 h-6"
            />
          </div>
          <div className="text-white text-4xl font-bold">18</div>
        </div>

        <div className="bg-[#2F3038] rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Total Stacks</span>
            {/* <RiStackLine className="text-xl text-white" /> */}
            <img src="/icons/stacks.svg" alt="Dashboard" className="w-6 h-6" />
          </div>
          <div className="text-white text-4xl font-bold">20</div>
        </div>
      </div>

      <Modal
        // title="Welcome to Planeo!"
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <WelcomeNote />
      </Modal>

      {/* Recent Activity */}
      <div className="bg-[#2F3038] rounded-xl p-6 mx-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-semibold mb-6 text-white">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg">
                {activity.icon}
              </div>
              <div>
                <p className="font-medium text-gray-200">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
