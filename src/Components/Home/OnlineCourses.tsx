import { CourseCard } from "../Card/CourseCard";

export const OnlineCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "React Front To Back",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
      videos: 75,
      classes: 35,
      reviews: 15,
      lessons: 12,
      students: 50,
      description:
        "It is a long established fact that a reader will be distracted.",
      instructor: {
        name: "Angela",
        category: "Development",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      price: 60,
      originalPrice: 120,
      action: "learn",
    },
    {
      id: 2,
      title: "PHP Beginner Advanced",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      videos: 35,
      classes: 15,
      reviews: 15,
      lessons: 12,
      students: 50,
      description:
        "It is a long established fact that a reader will be distracted.",
      instructor: {
        name: "Angela",
        category: "Development",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      price: 60,
      originalPrice: 120,
      action: "cart",
    },
  ];

  return (
    <div className="pb-10 pt-6 bg-gray-50">
      <div className="my-3 flex justify-center items-center">
        <span className="text-cyan-500 text-center mb-1  font-bold text-3xl mr-2 ">
          ■
        </span>
        <span className="text-cyan-500 text-center font-bold text-4xl md:text-4xl uppercase tracking-wider">
          Our Online Courses
        </span>
        <span className="text-cyan-500 text-center mb-1 font-bold text-3xl ml-2 ">
          ■
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <h2 className=" font-bold text-gray-900"></h2>
          {/* <a
            href="#"
            className="text-gray-900 font-semibold flex items-center space-x-2 hover:text-blue-600"
          >
            <span>Browse Histudy Courses</span>
            <svg
              className="w-6 h-6"
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
          </a> */}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};
