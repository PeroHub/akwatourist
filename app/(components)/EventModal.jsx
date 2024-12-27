"use client"
import { useState } from "react";

export default function EventModal({ event, onClose, onUpdate }) {
  const [formData, setFormData] = useState({ ...event });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (status) => {
    const updatedEvent = { ...formData, status };
    onUpdate(updatedEvent);

    try {
      const response = await fetch("/api/updateEventStatus", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: formData._id, status }),
      });
  
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "Failed to update event");
      }
  
      const { event } = await response.json();
      onUpdate(event); // Update the parent state
    } catch (error) {
      console.error("Error updating event:", error.message);
      alert("Failed to update event: " + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Event</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border focus:outline-none border-gray-300 py-2 px-2 rounded-md sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="mt-1 block w-full border px-2 py-2 focus:outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border px-2 py-2 focus:outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border px-2 py-2 focus:outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full border px-2 py-2 focus:outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              {/* <option value="Postponed">Postponed</option> */}
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => handleSubmit("Approved")}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={() => handleSubmit("Declined")}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Decline
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
