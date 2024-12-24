import React from 'react';
import Filters from './Filters';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex space-x-10">
        <Link href={`/`}>
            <h1 className="text-red-500 text-2xl font-bold">AkwaTourist</h1>
        </Link>
        <input
          type="text"
          placeholder="Search for anything"
          className="border border-gray-300 focus:outline-none rounded-lg px-4 py-2 w-64"
        />
        {/* Dropdown option for location can be uncommented if needed */}
        {/* <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Agwa, NG</option>
            </select> */}
      </div>
      <div className="flex items-center space-x-4">
        {/* <input
          type="text"
          placeholder="Email Address"
          className="border border-gray-300 focus:outline-none rounded-lg px-4 py-2 w-64"
        />
        <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded-lg">
          Subscribe For Events
        </button> */}
          <Link href={`/events`}>
            <button className="bg-white border border-blue-500 text-sm text-blue-500 px-4 py-2 rounded-lg">
            Events
            </button>
          </Link>

          <Link href={`/add-event`}>
            <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded-lg">
            Register Event
            </button>
          </Link>
      </div>
    </header>
  );
}
