export interface Instructor {
  name: string;
  avatar: string;
  category: string;
}

export interface CourseType {
  title: string;
  image: string;
  videos: number;
  classes: number;
  reviews: number;
  lessons: number;
  students: number;
  description: string;
  instructor: Instructor;
  price: number;
  originalPrice: number;
}

export interface ResearchPost {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor?: string;
}
export interface EventType {
  id: number;
  title: string;
  image: string;
  location: string;
  time: string;
  date: string;
  month: string;
  year: string;
}
export interface TestimonialType {
  id: number;
  quote: string;
  name: string;
  designation: string;
  image: string;
  rating: number;
}

export interface GalleryImageType {
  id: number;
  url: string;
  title: string;
  category: string;
}
