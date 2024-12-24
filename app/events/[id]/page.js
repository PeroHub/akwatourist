"use client"
import { useParams } from "next/navigation";
import Header from "../../(components)/Header";

const eventData = {
    "Technological Innovation Pathway for the Grassroot": {
      title: "Technological Innovation Pathway for the Grassroot",
      date: "Dec 31 @ 10 AM EST",
      series: "EVENT SERIES",
      description:
        "An insightful event aimed at exploring technological pathways for the grassroots.",
      venue: "Online",
      category: "Technology",
      image: "/app.png",
    },
    "Lagos - Sunday Free Online Guided Meditation": {
      title: "Lagos - Sunday Free Online Guided Meditation",
      date: "Dec 22 @ 8:45 AM EST",
      series: "EVENT SERIES",
      description:
        "Join this guided meditation session designed for beginners and above.",
      venue: "Lagos",
      category: "Health & Wellness",
      image: "/mobile.png",
    },
    "Succeed in Tech New Members Meet and Greet": {
      title: "Succeed in Tech New Members Meet and Greet",
      date: "Dec 29 @ 8:45 AM EST",
      series: "EVENT SERIES",
      description:
        "A welcoming event for new members to connect and network in tech.",
      venue: "Online",
      category: "Networking",
      image: "/corporate-event.jpg",
    },
  };

  export default function EventDetails() {
    const router = useParams();
    const { id } = router
    const decodedID = id ? decodeURIComponent(id) : '';
    const event = eventData[decodedID]

    if(!event) {
        return (
            <div className="text-center">
              <Header />
              <h1 className="text-2xl font-bold mt-40">Event Not Found</h1>
            </div>
          );
    }
    return (
        <div className="bg-gray-50 min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto p-6 mt-6">
            <img
            src={event.image}
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
                <button className="bg-blue-500 text-sm text-white px-2 py-2 rounded-md text-sm">View location on Map</button>
                <button className="bg-blue-500 text-sm text-white px-2 py-2 rounded-md text-sm">Add To Calender</button>    
            </div>
        </main>
        </div>
    )
  }