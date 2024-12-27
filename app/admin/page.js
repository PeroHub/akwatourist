"use client";
import { useState, useEffect } from "react";
import Header from "../(components)/Header";
import EventModal from "../(components)/EventModal";
import Image from "next/image";

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/getEvents", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
        event._id === updatedEvent._id ? updatedEvent : event
      )
    );
    handleCloseModal();
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        {events.length === 0 ? (
          <p className="text-gray-600">No events available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4"
              >
                {/* Event Image */}
                <Image
                  src={event.picture}
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
        )}
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
