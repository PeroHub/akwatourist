"use client"
import { useState } from "react";
import Header from "../(components)/Header";
import EventModal from "../(components)/EventModal";
import Image from "next/image";

const mockEvents = [
  {
    id: 1,
    title: "Technological Innovation Pathway",
    venue: "Online",
    description: "An innovative tech event for grassroots.",
    category: "Technology",
    status: "Pending",
    date: "2024-12-31",
    image: "/corporate-event.jpg", // Example image
  },
  {
    id: 2,
    title: "Guided Meditation",
    venue: "Lagos",
    description: "A meditation event for beginners and experts.",
    category: "Health",
    status: "Pending",
    date: "2024-12-22",
    image: "/corporate-event.jpg", // Example image
  },
];

export default function Admin() {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    handleCloseModal();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4"
            >
              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.title}
                width={100}
                height={100}
                className="w-full h-40 object-cover rounded-md"
              />
              {/* Event Details */}
              <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
              <p className="text-sm text-gray-600">{event.description}</p>
              <span className="text-sm text-gray-500">Category: {event.category}</span>
              <span className="text-sm text-gray-500">Venue: {event.venue}</span>
              <span className="text-sm text-gray-500">Status: {event.status}</span>
              <button
                onClick={() => handleViewEvent(event)}
                className="bg-blue-500 text-sm text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                View Event
              </button>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={handleCloseModal}
          onUpdate={handleUpdateEvent}
        />
      )}
    </div>
  );
}
