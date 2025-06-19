import { motion } from "framer-motion";
import Swal from "sweetalert2";
import React, { useState } from "react";

const BookingFormPage = () => {
  const [selectedService, setSelectedService] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent",
        icon: "success",
      });
      event.target.reset();
      setSelectedService("");
    }
  };

  const formVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    "Ballon Packages",
    "Parties",
    "Dinner Table Set Up Event",
    "Gifts",
    "Hire",
    "Grab & Go",
    "Other",
  ];

  return (
    <motion.div
      className="max-w-4xl p-10 shadow-xl rounded-xl mt-10 space-y-8 border"
      variants={formVariant}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={onSubmit}>
        <h2 className="text-3xl font-bold text-accent mb-6">Book Your Event</h2>

        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Instagram Handle
          </label>
          <input
            type="text"
            name="instagram"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <p className="font-semibold text-accent mb-3">
            What is the event? <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Birthday",
              "Bridal Shower",
              "Corporate Event",
              "Baby Shower",
              "Proposal",
            ].map((event, i) => (
              <label key={i} className="flex items-center gap-2 text-accent">
                <input type="radio" name="eventType" value={event} required />
                {event}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold text-accent mb-1">
            Choose your service <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select service type
            </option>
            {services.map((service, i) => (
              <option key={i} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {selectedService === "Other" && (
          <div>
            <label className="block text-sm font-semibold text-accent mb-1">
              Please specify your service
            </label>
            <textarea
              name="otherService"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        )}

        <div>
          <p className="font-semibold text-accent mb-3">
            Budget <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["£200 - £250", "£250 - £300", "£300 - £500", "£500+"].map(
              (budget, i) => (
                <label key={i} className="flex items-center gap-2 text-accent">
                  <input type="radio" name="budget" value={budget} required />
                  {budget}
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary hover:text-accent transition-all duration-300 mt-4"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingFormPage;
