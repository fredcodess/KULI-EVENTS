import React, { useState } from "react";
import { motion } from "framer-motion";

const BookingFormPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    instagram: "",
    eventType: "",
    serviceType: "",
    otherService: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      <h2 className="text-3xl font-bold text-accent mb-6">Book Your Event</h2>

      <div>
        <label className="block text-sm font-semibold text-accent mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
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
          value={formData.instagram}
          onChange={handleChange}
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
              <input
                type="radio"
                name="eventType"
                required
                value={event}
                checked={formData.eventType === event}
                onChange={handleChange}
              />
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
          value={formData.serviceType}
          onChange={handleChange}
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

      {formData.serviceType === "Other" && (
        <div>
          <label className="block text-sm font-semibold text-accent mb-1">
            Please specify your service
          </label>
          <textarea
            name="otherService"
            value={formData.otherService}
            onChange={handleChange}
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
                <input
                  type="radio"
                  name="budget"
                  required
                  value={budget}
                  checked={formData.budget === budget}
                  onChange={handleChange}
                />
                {budget}
              </label>
            )
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary hover:text-accent transition-all duration-300"
        >
          Submit Booking
        </button>
      </div>
    </motion.div>
  );
};

export default BookingFormPage;
