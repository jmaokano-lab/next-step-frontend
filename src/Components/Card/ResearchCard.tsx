import { ResearchPost } from "@/Types";

export const ResearchPostCard: React.FC<{ post: ResearchPost }> = ({
  post,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>

        <a
          href="#"
          className="text-gray-900 font-semibold flex items-center space-x-2 hover:text-blue-600 transition-colors group"
        >
          <span>Learn More</span>
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
        </a>
      </div>
    </div>
  );
};
