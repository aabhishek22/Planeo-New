import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDashboardLine, RiStackLine } from 'react-icons/ri';
import { BsGrid, BsWindow } from 'react-icons/bs';
import { VscFileCode } from 'react-icons/vsc';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-[380px]'} transition-all duration-300 min-h-screen bg-[#232630] p-6 border-r border-gray-800 relative`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-6 bg-[#232630] p-2 rounded-full border border-gray-800"
      >
        {isCollapsed ? <HiChevronRight className="text-white" /> : <HiChevronLeft className="text-white" />}
      </button>

      <div className={`flex items-center gap-3 mb-12 ${isCollapsed ? 'justify-center' : ''}`}>
        <div className="w-10 h-10 rounded-full bg-[#7361EA] flex items-center justify-center">
          <img src="/planeo-logo.svg" alt="Planeo" className="w-6 h-6" />
        </div>
        {!isCollapsed && <h1 className="text-2xl font-semibold text-[#7361EA]">Planeo</h1>}
      </div>
      
      <nav className="space-y-1">
        <Link
          to="/"
          className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-lg ${
            location.pathname === '/' 
              ? 'bg-[#7361EA] text-white' 
              : 'text-white hover:bg-gray-800'
          }`}
        >
          <RiDashboardLine className="text-xl" />
          {!isCollapsed && <span className="font-medium">Dashboard</span>}
        </Link>

        <Link
          to="/clusters"
          className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-lg ${
            location.pathname === '/clusters' 
              ? 'bg-[#7361EA] text-white' 
              : 'text-white hover:bg-gray-800'
          }`}
        >
          <BsGrid className="text-xl" />
          {!isCollapsed && <span className="font-medium">Clusters</span>}
        </Link>

        <Link
          to="/environments"
          className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-lg ${
            location.pathname === '/environments' 
              ? 'bg-[#7361EA] text-white' 
              : 'text-white hover:bg-gray-800'
          }`}
        >
          <BsWindow className="text-xl" />
          {!isCollapsed && <span className="font-medium">Environments</span>}
        </Link>

        <Link
          to="/templates"
          className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-lg ${
            location.pathname === '/templates' 
              ? 'bg-[#7361EA] text-white' 
              : 'text-white hover:bg-gray-800'
          }`}
        >
          <VscFileCode className="text-xl" />
          {!isCollapsed && <span className="font-medium">Templates</span>}
        </Link>

        <Link
          to="/stacks"
          className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-3 px-4 py-3 rounded-lg ${
            location.pathname === '/stacks' 
              ? 'bg-[#7361EA] text-white' 
              : 'text-white hover:bg-gray-800'
          }`}
        >
          <RiStackLine className="text-xl" />
          {!isCollapsed && <span className="font-medium">Stacks</span>}
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar; 