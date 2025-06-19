import React from "react";
import { TiTick } from "react-icons/ti";

const AboutPage = () => {
  return (
    <div>
      <div
        style={{ background: "linear-gradient(#cb7a3c, #f1c3a1)" }}
        className="text-white py-24 px-6 lg:px-32 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Kuli Events
        </h1>
        <p className="text-lg md:text-xl font-light">
          Making your celebrations sparkle with joy and elegance.
        </p>
      </div>

      <section className="text-center py-16 px-6 lg:px-32 bg-[#f9e7d9] m-30 my-10 rounded shadow-2xl text-accent">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4 max-w-3xl mx-auto">
          At Kuli Events, we specialize in adding a touch of magic to your most
          special occasions. From birthday celebrations and graduation parties
          to intimate events, our mission is to make every moment unforgettable.
        </p>
        <p className="mb-10 max-w-2xl mx-auto">
          We offer a variety of services and products to make your event
          perfect:
        </p>

        <ul className="max-w-xl mx-auto text-left space-y-4">
          {[
            "Stunning balloon arrangements",
            "Themed decorations tailored to your needs",
            "Delicious food and refreshing drinks",
            "Party essentials that add style and joy to your celebrations",
          ].map((item, index) => (
            <li key={index} className="flex items-start justify-center  gap-3">
              <TiTick className="text-primary mt-1 text-xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10 lg:px-32 bg-[#f9e7d9] m-30 my-10 rounded shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-accent mb-12">
          Our Previous Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md group">
              <img
                src="/mainhome.jpg"
                alt={`Gallery ${i + 1}`}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
