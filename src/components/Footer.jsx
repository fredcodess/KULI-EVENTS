import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <hr className="ml-12 mr-12" />
      <h3 className="text-center sevillana fomt-bold text-5xl mt-4">
        Kuli Events
      </h3>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://wa.me/44987382387829"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-9 h-9" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/instaicon.png" alt="WhatsApp" className="w-9 h-9" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/tktkicon.png" alt="WhatsApp" className="w-9 h-9" />
        </a>
      </div>
      <div className="mt-4 text-center mb-2">
        <div className="flex justify-center mb-4 gap-12">
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>
        <p className="text-gray-400">
          &copy; 2025 Kuli Events. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
