"use client"; // for App Router; remove if using Pages Router
import React from "react";
import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen px-4 py-12 bg-gradient-to-br from-pink-50 to-orange-100 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 text-center">
        Contact
      </h2>
      <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 text-center">
        Anand Sweets 🍬
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-80 md:h-full shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1782.1449441343505!2d77.87931312820068!3d9.18434167432112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b359eefcf455%3A0x765bbb4994f07e5e!2sAnand%20Sweets%20and%20Snacks%20Kovilpatti!5e1!3m2!1sen!2sin!4v1749830856591!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <a
            href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-pink-600 text-white px-6 py-4 rounded-lg hover:bg-pink-700 transition"
          >
            <FaInstagram className="text-2xl" />
            <span>@anandsweets</span>
          </a>

          <a
            href="mailto:anandsweets@example.com"
            className="flex items-center space-x-4 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition"
          >
            <FaEnvelope className="text-2xl" />
            <span>anandsweets@example.com</span>
          </a>

          <a
            href="tel:+911234567890"
            className="flex items-center space-x-4 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            <FaPhone className="text-2xl" />
            <span>+91 12345 67890</span>
          </a>

          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp Us</span>
          </a>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-pink-800 mb-1">
              Address
            </h2>
            <p className="text-pink-700">
              123, Sweets Street, Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
