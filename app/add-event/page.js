"use client"
import Header from "../(components)/Header";

export default function AddEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Event Data:", data); // Replace with API call to save data
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[600px] border border-gray-250 mx-auto mt-10 px-4 py-6">
        <h1 className="text-xl font-bold text-gray-800 pl-6 mb-6">Add New Event</h1>
        <form
          className="bg-white p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 block w-full border border-gray-300 py-2 px-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Picture */}
          <div>
            <label
              htmlFor="picture"
              className="block text-sm font-medium text-gray-700"
            >
              Picture
            </label>
            <input
              type="file"
              name="picture"
              id="picture"
              accept="image/*"
              className="mt-1 block w-full cursor-pointer text-gray-500 border-b py-2 px-2 focus:outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* Venue */}
          <div>
            <label
              htmlFor="venue"
              className="block text-sm font-medium text-gray-700"
            >
              Venue
            </label>
            <input
              type="text"
              name="venue"
              id="venue"
              className="mt-1 block w-full border px-2 py-2 focus:outline-none border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="mt-1 block border focus:outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              className="mt-1 block w-full border focus:outline-none px-2 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Event
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
