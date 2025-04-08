import React from "react";
import { Pencil, Trash } from "lucide-react";
import { data } from "../utils";

const ManufacturerTable = () => {
  
    

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border border-black ">
        <thead>
          <tr className="text-left">
            <th className="p-3 border-b border-black text-nowrap">Created at</th>
            <th className="p-3 border-b border-black text-nowrap">Manufacturer name</th>
            <th className="p-3 border-b border-black text-nowrap">Date of manufacturing</th>
            <th className="p-3 border-b border-black text-nowrap">Closing date</th>
            <th className="p-3 border-b border-black text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border-b border-black text-nowrap">{row.createdAt}</td>
              <td className="p-3 border-b border-black text-nowrap">{row.manufacturer}</td>
              <td className="p-3 border-b border-black text-nowrap">{row.manufacturingDate}</td>
              <td className="p-3 border-b border-black text-nowrap">{row.closingDate}</td>
              <td className="p-3 border-b border-black ">
                <div className="flex gap-3 items-center">
                    <button className="text-blue-600 hover:text-blue-800">
                  <Pencil size={16} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash size={16} />
                </button>
                <button className="ml-2 text-sm text-gray-700 hover:underline">
                  View
                </button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManufacturerTable;
