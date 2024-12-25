"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left Section: Logo and Search */}
      <div className="md:flex items-center md:space-x-4 md:space-x-10">
        <Link href={`/`} className='foc'>
          <h1 className="text-red-500 text-xl md:text-2xl font-bold w-full">
            AkwaTourist
          </h1>
        </Link>
        <input
          type="text"
          placeholder="Search for anything"
          className="hidden md:block border border-gray-300 mt-8 md:mt-0 focus:outline-none rounded-lg px-4 py-2 w-full"
        />
      </div>

      {/* Mobile Menu Button with Animation */}
      <div className='flex justify-start'>

        <button
            className="md:hidden flex flex-col justify-between h-6 w-6 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <span
            className={`h-1 w-full bg-gray-500 rounded transform transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            ></span>
            <span
            className={`h-1 w-full bg-gray-500 rounded transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
            }`}
            ></span>
            <span
            className={`h-1 w-full bg-gray-500 rounded transform transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            ></span>
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
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

      {/* Slide-out Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h1 className="text-red-500 text-xl font-bold">AkwaTourist</h1>
          {/* <button
            className="text-gray-500 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>
        <nav className="px-6 py-4 space-y-4">
          <Link href={`/events`}>
            <button className="w-full bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-left">
              Events
            </button>
          </Link>
          <Link href={`/add-event`}>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-left">
              Register Event
            </button>
          </Link>
        </nav>
      </div>

      {/* Overlay for slide-out menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
