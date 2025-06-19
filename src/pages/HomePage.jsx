import { motion } from "framer-motion";
import Services from "../components/Services";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/mainhome.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-xl font-semibold leading-snug mb-6"
          >
            Event hire and decor company dedicated to making your events extra
            special.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl"
          >
            Kuli Events
          </motion.h2>
        </div>
      </section>

      <section className="relative -mt-20 z-30 container mx-auto px-4 bg-white rounded-xl shadow-lg py-8">
        <div className="flex justify-around items-center text-center flex-col md:flex-row gap-6 md:gap-0">
          <a href="/bookingform" className="text-accent px-6 py-3">
            <p className="uppercase text-sm">Calendar</p>
            <p className="font-bold text-xl flex items-center justify-center gap-2">
              Book Now <ChevronRight />
            </p>
          </a>

          <div className="h-0.5 w-3/4 md:h-[100px] md:w-0.5 bg-accent"></div>

          <a href="/" className="text-accent px-6 py-3">
            <p className="uppercase text-sm">Services</p>
            <p className="font-bold text-xl flex items-center justify-center gap-2">
              See Services <ChevronRight />
            </p>
          </a>
        </div>
      </section>

      <Services />

      <section
        style={{ background: "linear-gradient(#f1c3a1,#cb7a3c)" }}
        className="text-white text-center py-16 px-4 mb-12"
      >
        <h2 className="uppercase text-2xl md:text-3xl font-bold">
          Book Your Celebration
        </h2>
        <p className="mt-6 max-w-2xl mx-auto leading-relaxed">
          Let us help you with your special occasion at Kuli Events. We are
          available to answer any questions you may have and offer suggestions.
          Get in touch and book your celebration today.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <a
            href="tel:+44987382387829"
            className="bg-white text-accent font-semibold px-10 py-3 rounded-full shadow hover:bg-secondary hover:text-accent transition"
          >
            Call Us
          </a>
          <a
            href="https://wa.me/44987382387829"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-accent font-semibold px-10 py-3 rounded-full flex items-center gap-2 shadow hover:bg-secondary hover:text-accent transition"
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="mailto:welcome@kulievents.co.uk"
            className="bg-white text-accent font-semibold px-10 py-3 rounded-full shadow hover:bg-secondary hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
