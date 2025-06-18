import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/mainhome.jpg"
          alt="Church Logo"
          className="absolute inset-0 bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/50 to-transparent z-10"></div>

        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 montserrat"
          >
            Welcome To <br />{" "}
            <span className=" mt-10 text-5xl md:text-9xl text-white drop-shadow-xl/50">
              Kuli Events
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6"
          >
            <a
              href=""
              className="bg-primary text-accent px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all transform hover:scale-105 flex items-center"
            >
              Book Now
            </a>
            <a
              href="/events"
              className="bg-white text-accent px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              See Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
