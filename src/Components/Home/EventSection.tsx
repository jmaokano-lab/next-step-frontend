import { EventType } from "@/Types";
import { EventCard } from "../Card/EventCard";

export const EventsSection = () => {
  const events: EventType[] = [
    {
      id: 1,
      title: "International Education Fair 2025",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      location: "IAC",
      time: "8:00 am - 5:00 pm",
      date: "11",
      month: "Jan",
      year: "2025",
    },
    {
      id: 2,
      title: "Painting Art Contest 2020",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      location: "Vancouver",
      time: "8:00 am - 5:00 pm",
      date: "9",
      month: "Mar",
      year: "2025",
    },
    {
      id: 3,
      title: "Histudy Education Fair 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      location: "Paris",
      time: "8:00 am - 5:00 pm",
      date: "10",
      month: "Oct",
      year: "2025",
    },
    {
      id: 4,
      title: "Elegant Light Box Paper Cut Dioramas",
      image:
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&h=600&fit=crop",
      location: "IAC Building",
      time: "8:00 am - 5:00 pm",
      date: "8",
      month: "Jan",
      year: "2025",
    },
  ];

  return (
    <div className="py-15 pt-6 bg-gray-50">
      <div className="my-3 flex justify-center items-center mb-8">
        <span className="text-cyan-500 text-center mb-1  font-bold text-3xl mr-2 ">
          ■
        </span>
        <span className="text-cyan-500 text-center font-bold text-4xl md:text-4xl uppercase tracking-wider">
          Our Events
        </span>
        <span className="text-cyan-500 text-center mb-1 font-bold text-3xl ml-2 ">
          ■
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
