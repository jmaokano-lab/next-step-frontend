import { CourseType } from "@/Types";

export const CourseCard = ({ course }: { course: CourseType }) => {
  //   console.log(course);
  return (
    <div className="bg-white p-3 flex justify-between items-center rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-84 object-cover rounded-xl"
        />
        {/* Video and Class badges */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="bg-white px-1 py-1 rounded-lg shadow-md flex items-center space-x-1">
            <span className="text-blue-500">▶</span>
            <span className="text-sm font-semibold text-gray-700">
              {course.videos} Videos
            </span>
          </div>
          <div className="bg-white px-1 py-1 rounded-lg shadow-md flex items-center space-x-2">
            <span className="text-cyan-500">📚</span>
            <span className="text-sm font-semibold text-gray-700">
              {course.classes} Class
            </span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        {/* Rating and Bookmark */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              ({course.reviews} Reviews)
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-700">
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
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>

        {/* Course Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {course.title}
        </h3>

        {/* Lessons and Students */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{course.students} Students</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{course?.description}</p>

        {/* Instructor */}
        <div className="flex items-center space-x-3 mb-6">
          <img
            src={course?.instructor?.avatar}
            alt={course?.instructor?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <span className="text-gray-600">By </span>
            <span className="font-semibold text-gray-900">
              {course?.instructor?.name}
            </span>
            <span className="text-gray-600"> In </span>
            <span className="font-semibold text-gray-900">
              {course?.instructor?.category}
            </span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gray-900">
              ৳{course?.price}
            </span>
            <span className="text-xl text-gray-400 line-through">
              ৳{course?.originalPrice}
            </span>
          </div>

          <button className="text-cyan-500 font-semibold flex items-center space-x-2 hover:text-cyan-700">
            <span>Learn More</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
