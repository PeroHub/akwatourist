"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../(components)/Header";

export default function EventDetails() {
  const { id } = useParams(); // Get ID from route
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/getEvents");
        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message || "Failed to fetch events");
        }

        const { events } = await response.json();
        const matchedEvent = events.find((event) => event._id === id); // Filter by ID
        if (!matchedEvent) {
          throw new Error("Event not found");
        }

        setEvent(matchedEvent);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center">
        <Header />
        <h1 className="text-2xl font-bold mt-40">Loading...</h1>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="text-center">
        <Header />
        <h1 className="text-2xl font-bold mt-40">{error || "Event Not Found"}</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
    <Header />
    <main className="max-w-3xl mx-auto p-6 mt-6">
      <img
        src={event.picture}
        alt={event.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">{event.title}</h1>
      <p className="text-sm text-gray-500">{event.date}</p>
      <p className="text-xs text-gray-400">{event.series}</p>
      <p className="mt-4 text-gray-700">{event.description}</p>
      <div className="mt-6 space-y-2">
        <p className="text-sm">
          <span className="font-semibold">Venue:</span> {event.venue}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Category:</span> {event.category}
        </p>
      </div>
      <div className="space-x-2 mt-4">
        <button className="bg-blue-500 text-sm text-white px-2 py-2 rounded-md">
          View Location on Map
        </button>
        <button className="bg-blue-500 text-sm text-white px-2 py-2 rounded-md">
          Add To Calendar
        </button>
      </div>
    </main>
  </div>
  );
}
