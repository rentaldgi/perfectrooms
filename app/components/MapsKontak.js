"use client";
import React, { useEffect, useState } from "react";
import { apiFetch, ENTITY } from "@/client/ApiClient";

export default function MapsKontak() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    apiFetch(`/locations?entity=${ENTITY}`)
      .then((res) => res.json())
      .then((data) => setLocations(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Gagal fetch lokasi:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-white/80">Memuat lokasi...</p>;
  }

  if (locations.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 justify-items-center gap-8">
        {paginatedLocations.map((loc, idx) => (
          <div
            key={loc.id ?? idx}
            className="w-full bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Iframe dibungkus <a> supaya bisa diklik */}
            <a
              href={loc.link || `https://www.google.com/maps?q=${encodeURIComponent(loc.alamat)}`}
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
                href={loc.link || `https://www.google.com/maps?q=${encodeURIComponent(loc.alamat)}`}
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-6 bg-yellow-300 text-black px-6 py-2 rounded-full shadow">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              aria-label="Lokasi sebelumnya"
              className={`text-2xl font-bold ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              &lsaquo;
            </button>
            <span className="text-sm font-medium">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              aria-label="Lokasi berikutnya"
              className={`text-2xl font-bold ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 transition"
              }`}
            >
              &rsaquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
