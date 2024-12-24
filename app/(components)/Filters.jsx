import React from 'react'

export default function Filters() {
    return (
    <div className="flex items-center justify-between bg-white  p-4">
        <div className="flex space-x-4">
          {/* <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>Any day</option>
          </select> */}
          <select className="border border-gray-300 focus:outline-none rounded-lg px-4 py-2">
            <option>Online</option>
          </select>
          {/* <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>Any distance</option>
          </select> */}
          <select className="border border-gray-300 focus:outline-none rounded-lg px-4 py-2">
            <option>Any category</option>
          </select>
        </div>
        {/* <button className="text-blue-500 underline">Reset filters</button> */}
    </div>
    )
}
