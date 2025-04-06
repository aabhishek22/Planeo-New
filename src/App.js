import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Clusters from './pages/Clusters';
import Environments from './pages/Environments';
import Templates from './pages/Templates';
import Stacks from './pages/Stacks';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#171923]">
        <Sidebar />
        <div className="flex-1">
          <div className="flex justify-end items-center gap-4 p-4">
            <button className="text-gray-400 hover:text-white text-xl">?</button>
            <button className="text-gray-400 hover:text-white text-xl">🔔</button>
            <button className="text-gray-400 hover:text-white text-xl">⚙️</button>
            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clusters" element={<Clusters />} />
              <Route path="/environments" element={<Environments />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/stacks" element={<Stacks />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
