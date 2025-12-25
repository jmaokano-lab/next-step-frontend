"use client";
import { ContactInfoCard } from "@/Components/Card/ContactInfoCard";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="py-20 bg-gradient-to-r from-[#f0ebeb] to-[#9cbdd7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Histudy Course Contact
            <br />
            can join with us.
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ContactInfoCard
            icon={
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            title="Contact Phone Number"
            details={["(+880) 1704 888644", "(+880) 1756 525969"]}
          />

          <ContactInfoCard
            icon={
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Our Email Address"
            details={["info@nexteducationbd.com"]}
          />

          <ContactInfoCard
            icon={
              <svg
                className="w-8 h-8 text-blue-600"
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
            }
            title="Our Location"
            details={[
              "Flat No-02, House No-293, Road No-04, Avenue-3,Mirpur-DOHS, Dhaka-1203",
            ]}
          />
        </div>

        {/* Contact Form and Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#84b3c1] to-[#5e98c4] rounded-3xl p-3 shadow-2xl">
              <img
                src="/contact.jpeg"
                alt="Customer Support"
                className="w-full h-[600px] rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 ">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-6">
              EDUCATION FOR EVERYONE
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get a Free Course You Can
              <br />
              Contact With Me
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#7faab7] to-[#5e98c4] text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>GET IT NOW</span>
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
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977536418396!2d-122.41941708468194!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
