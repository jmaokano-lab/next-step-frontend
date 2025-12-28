import { TestimonialType } from "@/Types";

export const TestimonialCard: React.FC<{ testimonial: TestimonialType }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mx-4 min-w-[350px] max-w-[360px] hover:shadow-2xl transition-shadow">
      {/* Quote Icon */}
      <div className="mb-3">
        <svg
          className="w-10 h-10 text-cyan-500 "
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-4 italic">
        "{testimonial.quote.slice(0, 160)}..."
      </p>

      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 fill-current"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4 border-t pt-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {testimonial.designation}.slice(150)
          </p>
        </div>
      </div>
    </div>
  );
};
