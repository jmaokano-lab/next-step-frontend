import { ResearchPost } from "@/Types";
import { ResearchPostCard } from "../Card/ResearchCard";

export const ResearchSection = () => {
  const posts: ResearchPost[] = [
    {
      id: 1,
      title: "How to Analyze Your Best Pages for SEO Performance",
      description: "It is a long established fact that a reader.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      bgColor: "purple",
    },
    {
      id: 2,
      title: "Difficult Things About Education.",
      description: "It is a long established fact that a reader.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Education Is So Famous, But Why?",
      description: "It is a long established fact that a reader.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="py-15 pt-6 bg-white">
      <div className="my-3 pb-6 flex justify-center items-center">
        <span className="text-cyan-500 text-center mb-1  font-bold text-3xl mr-2 ">
          ■
        </span>
        <span className="text-cyan-500 text-center font-bold text-4xl md:text-4xl uppercase tracking-wider">
          Our Service
        </span>
        <span className="text-cyan-500 text-center mb-1 font-bold text-3xl ml-2 ">
          ■
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ResearchPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
