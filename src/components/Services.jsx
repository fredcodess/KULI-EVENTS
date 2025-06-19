import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Balloon Set Ups", image: "/mainhome.jpg" },
  { title: "Parties", image: "/mainhome.jpg" },
  { title: "Table Set Up", image: "/mainhome.jpg" },
  { title: "Gifts", image: "/mainhome.jpg" },
  { title: "Hire", image: "/mainhome.jpg" },
  { title: "Grab & Go", image: "/mainhome.jpg" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <div className="px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="overflow-hidden rounded-lg shadow-lg group transform transition-transform hover:scale-[1.02]"
          >
            <div className="relative">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                  {service.title}
                </h3>
                <a
                  href="#"
                  className="mt-2 text-white underline text-lg hover:text-accent transition-colors"
                >
                  See More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
