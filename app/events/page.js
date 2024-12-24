import Header from "../(components)/Header";
import Filters from "../(components)/Filters";
import EventCard from "../(components)/EventCard";

const events = [
  {
    title: "Technological Innovation Pathway for the Grassroot",
    date: "Dec 31 @ 10 AM EST",
    series: "EVENT SERIES",
    image: "/app.png",
  },
  {
    title: "Lagos - Sunday Free Online Guided Meditation",
    date: "Dec 22 @ 8:45 AM EST",
    series: "EVENT SERIES",
    image: "/mobile.png",
  },
  {
    title: "Succeed in Tech New Members Meet and Greet",
    date: "Dec 29 @ 8:45 AM EST",
    series: "EVENT SERIES",
    image: "/corporate-event.jpg",
  },
];

export default function Events() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-[1100px] mx-auto px-4 py-6">
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-[800px]">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}
