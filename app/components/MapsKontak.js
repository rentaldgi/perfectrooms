"use client";
import React, { useState } from "react";

const locations = [
  {
    kota: "Bekasi",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.374460300056!2d106.8536393!3d-6.2114259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3021a5e5031%3A0x1c839aa7466a2bc4!2sJl.%20Kayu%20Manis%20Timur%20II%20No.53%2C%20Matraman%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1721021520070!5m2!1sid!2sid",
    alamat:
      "Kawasan, Apartment Grand Kamala Lagoon, Jl. KH. Noer Ali, RT.001/RW.002, Pekayon Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17148",
    link: "https://maps.app.goo.gl/CzztkkmcyHQSuFPAA",
  },
];

export default function MapsKontak() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(locations.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedLocations = locations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 justify-items-center gap-8">
        {paginatedLocations.map((loc, idx) => (
          <div
            key={idx}
            className="w-full bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Iframe dibungkus <a> supaya bisa diklik */}
            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-64 sm:h-72"
            >
              <iframe
                src={loc.embedUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-none rounded-t-xl pointer-events-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-3 left-3 bg-yellow-300 text-black font-semibold px-4 py-1 rounded-full text-xs shadow-md">
                {loc.kota}
              </div>
            </a>

            {/* Alamat dibungkus <a> juga */}
            <div className="p-5 text-gray-800 text-sm leading-relaxed">
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition"
              >
                {loc.alamat}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
