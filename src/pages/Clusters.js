import React from 'react';

function Clusters() {
  const clusters = [
    {
      name: 'GCP Dev',
      path: '~/kube/config',
      context: 'gcp-us-west-1-dev',
      status: 'active'
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white">← Back</button>
          <span className="text-white">|</span>
          <h1 className="text-xl">Clusters</h1>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <span>+</span> Add Cluster
        </button>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Clusters"
          className="w-full bg-gray-800 rounded-md px-4 py-2 pl-10"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-white">Name</th>
              <th className="text-left p-4 text-white">Path</th>
              <th className="text-left p-4 text-white">Context</th>
              <th className="text-left p-4 text-white"></th>
            </tr>
          </thead>
          <tbody>
            {clusters.map((cluster) => (
              <tr key={cluster.name} className="hover:bg-gray-700">
                <td className="p-4">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 rounded-full bg-green-500 text-white "></div>
                    {cluster.name}
                  </div>
                </td>
                <td className="p-4 text-white">{cluster.path}</td>
                <td className="p-4 text-white">{cluster.context}</td>
                <td className="p-4 text-white text-right">
                  <button className="text-white hover:text-white">
                    <span>🗑</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clusters; 