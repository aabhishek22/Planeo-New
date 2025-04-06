import React from 'react';
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";


function Table({ columns, data, onDelete, onEdit }) {
  return (
    <div className="bg-[#2F3039] rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            {columns.map((column) => (
              <th key={column} className="text-center p-4 text-white">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.name} className="hover:bg-gray-700">
              <td className="p-4">
                <div className="flex items-center justify-center gap-2 text-white">
                  <div className={`w-2 h-2 rounded-full ${row.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  {row.name}
                </div>
              </td>
              {columns.includes('Path') && (
                <td className="p-4 text-white text-center">{row.path}</td>
              )}
              {columns.includes('Context') && (
                <td className="p-4 text-white text-center">{row.context}</td>
              )}
              {columns.includes('Cluster') && (
                <td className="p-4 text-white text-center">{row.cluster}</td>
              )}
              {columns.includes('Namespace') && (
                <td className="p-4 text-white text-center">{row.namespace}</td>
              )}
              <td className="p-4 text-white text-center">
                <div className="flex items-center justify-center gap-2">
                  <button 
                    className="text-white hover:text-white"
                    onClick={() => onDelete && onDelete(row)}
                  >
                    <MdOutlineDelete size={20} />
                  </button>
                  <button 
                    className="text-white hover:text-white"
                    onClick={() => onEdit && onEdit(row)}
                  >
                    <MdOutlineEdit size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 