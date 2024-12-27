"use client";
import { useEffect, useState } from "react";
import Header from "../(components)/Header";
import Filters from "../(components)/Filters";
import EventCard from "../(components)/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch approved events from the database
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/getEvents");

        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message || "Failed to fetch events");
        }

        const { events } = await response.json();
        // Filter events to include only those with status "Approved"
        const approvedEvents = events.filter((event) => event.status === "Approved");
        setEvents(approvedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-[1100px] mx-auto px-4 py-6">
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-[800px]">
          {events.length > 0 ? (
            events.map((event, index) => <EventCard key={index} event={event} />)
          ) : (
            <p className="text-center">No approved events found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
