import { EventType } from "@/Types";

export const EventCard: React.FC<{ event: EventType }> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group">
      <div className="grid md:grid-cols-5 gap-6 p-6">
        {/* Event Image */}
        <div className="md:col-span-2 relative">
          <div className="relative rounded-xl overflow-hidden h-full">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Date Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl px-4 py-3 text-center shadow-lg">
              <div className="text-xs font-semibold">
                {event.date} {event.month}
              </div>
              <div className="text-xs">{event.year}</div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="md:col-span-3 flex flex-col justify-center">
          {/* Location and Time */}
          <div className="flex items-center space-x-6 text-gray-600 text-sm mb-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{event.time}</span>
            </div>
          </div>

          {/* Event Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            {event.title}
          </h3>

          {/* Get Ticket Button */}
          <div>
            <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all flex items-center space-x-2 group">
              <span>Get Ticket</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
