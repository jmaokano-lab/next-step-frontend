import Marquee from "react-fast-marquee";
import { TestimonialCard } from "../Card/TestimonialCard";
import { TestimonialType } from "@/Types";

const Testimonial: React.FC = () => {
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      quote:
        "The study abroad consulting service was exceptional. They guided me through every step of the application process and helped me secure admission to my dream university in Canada.",
      name: "Sarah Johnson",
      designation: "Student at University of Toronto",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Thanks to their expert guidance, I successfully navigated the visa process and scholarship applications. I'm now studying at Oxford University and couldn't be happier!",
      name: "Michael Chen",
      designation: "Student at Oxford University",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The team provided personalized advice that matched my academic goals perfectly. Their support made my transition to studying in Australia smooth and stress-free.",
      name: "Emily Rodriguez",
      designation: "Student at University of Melbourne",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Professional, knowledgeable, and always available to answer questions. They helped me find the perfect program and university that aligned with my career aspirations.",
      name: "David Kim",
      designation: "Student at of Melbourne University",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "From university selection to visa approval, the entire process was seamless. I highly recommend their services to anyone planning to study abroad.",
      name: "Priya Patel",
      designation: "Student at Cambridge University",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "Their comprehensive support and expertise in international education made my dream of studying in Germany a reality. Forever grateful for their dedication!",
      name: "James Wilson",
      designation: "Student at Technical University of Munich",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      rating: 5,
    },
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="my-3 flex justify-center items-center mb-12">
        <span className="text-cyan-500 text-center mb-1  font-bold text-3xl mr-2 ">
          ■
        </span>
        <span className="text-cyan-500 text-center font-bold text-4xl md:text-4xl uppercase tracking-wider">
          testimonial
        </span>
        <span className="text-cyan-500 text-center mb-1 font-bold text-3xl ml-2 ">
          ■
        </span>
      </div>

      {/* Marquee Testimonials */}
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
};

// const Testimonial = () => {
//   return (
//     <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
//   <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
//     <h1 className="p-4 text-4xl font-semibold leading-none text-center">
//       What our customers are saying about us
//     </h1>
//   </div>
//   <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
//     <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
//       <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
//         <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//             fill="currentColor"
//             className="w-8 h-8 dark:text-violet-600"
//           >
//             <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
//             <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
//           </svg>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
//           quibusdam, eligendi exercitationem molestias possimus facere.
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//             fill="currentColor"
//             className="absolute right-0 w-8 h-8 dark:text-violet-600"
//           >
//             <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
//             <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
//           </svg>
//         </p>
//       </div>
//       <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
//         <img
//           src="https://source.unsplash.com/50x50/?portrait?1"
//           alt=""
//           className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
//         />
//         <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
//         <p className="text-sm uppercase">Aliquam illum</p>
//       </div>
//     </div>

//   </div>
// </section>
//   )
// }

export default Testimonial;
