import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine, RiStackLine } from "react-icons/ri";
import { BsGrid, BsWindow } from "react-icons/bs";
import { VscFileCode } from "react-icons/vsc";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      style={{ boxShadow: "0 0 20px black" }}
      className={`flex flex-col ${
        isCollapsed ? "w-20" : "w-[380px]"
      } transition-all duration-300 min-h-screen bg-[#232630] p-6 border-r rounded-r-[30px]  drop-shadow-xl border-gray-800 relative`}
    >
      <div className="">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-4 top-6 bg-[#232630] p-2 rounded-full border border-gray-800"
        >
          {isCollapsed ? (
            <HiChevronRight className="text-white" />
          ) : (
            <HiChevronLeft className="text-white" />
          )}
        </button>
        <div
          className={`flex items-center gap-3 mb-12  ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-[#7361EA] flex items-center justify-center">
            <img src="/planeo-logo.svg" alt="Planeo" className="w-6 h-6" />
          </div>
          {!isCollapsed && (
            <h1 className="text-2xl font-semibold text-[#7361EA]">Planeo</h1>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col  ">
        <nav className="space-y-1 flex-1  ">
          <Link
            to="/"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-3 px-4 py-3 rounded-lg ${
              location.pathname === "/"
                ? "bg-[#7361EA] text-white"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {/* <RiDashboardLine className="text-xl" /> */}
            <img
              src="/icons/dashboard.svg"
              alt="Dashboard"
              className="w-6 h-6"
            />

            {!isCollapsed && <span className="font-medium">Dashboard</span>}
          </Link>

          <Link
            to="/clusters"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-3 px-4 py-3 rounded-lg ${
              location.pathname === "/clusters"
                ? "bg-[#7361EA] text-white"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {/* <BsGrid className="text-xl" /> */}
            <img src="/icons/cluster.svg" alt="Dashboard" className="w-6 h-6" />
            {!isCollapsed && <span className="font-medium">Clusters</span>}
          </Link>

          <Link
            to="/environments"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-3 px-4 py-3 rounded-lg ${
              location.pathname === "/environments"
                ? "bg-[#7361EA] text-white"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {/* <BsWindow className="text-xl" /> */}
            <img
              src="/icons/environments.svg"
              alt="Dashboard"
              className="w-6 h-6"
            />
            {!isCollapsed && <span className="font-medium">Environments</span>}
          </Link>

          <Link
            to="/templates"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-3 px-4 py-3 rounded-lg ${
              location.pathname === "/templates"
                ? "bg-[#7361EA] text-white"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {/* <VscFileCode className="text-xl" /> */}
            <img
              src="/icons/templates.svg"
              alt="Dashboard"
              className="w-6 h-6"
            />
            {!isCollapsed && <span className="font-medium">Templates</span>}
          </Link>

          <Link
            to="/stacks"
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-3 px-4 py-3 rounded-lg ${
              location.pathname === "/stacks"
                ? "bg-[#7361EA] text-white"
                : "text-white hover:bg-gray-800"
            }`}
          >
            {/* <RiStackLine className="text-xl" /> */}
            <img src="/icons/stacks.svg" alt="Dashboard" className="w-6 h-6" />
            {!isCollapsed && <span className="font-medium">Stacks</span>}
          </Link>
        </nav>

        {/* bottom section */}

        <div
          className={` p-4 ${
            isCollapsed ? "flex flex-col  items-center" : ""
          }  `}
        >
          <button
            className={`flex items-center ${
              isCollapsed ? "justify-center" : ""
            } w-full font-medium px-4 py-2 text-white hover:bg-gray-800 rounded-lg gap-3`}
          >
            {/* You can use an icon here if preferred */}
            <img src="/icons/docs.svg" alt="Dashboard" className="w-6 h-6  " />

            {!isCollapsed && <span className="font-medium">Docs</span>}
          </button>

          <div
            className={`flex items-center border-t border-gray-100 mt-4 pt-3 px-3 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="relative border rounded-full ">
              <img
                src="/user.jpg"
                alt="User"
                className="h-10 w-10 rounded-full"
              />
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
