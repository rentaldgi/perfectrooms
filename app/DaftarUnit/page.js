"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardUnit from "../components/CardUnit/CardUnit";
import { Units } from "../../data/units";
import AnimatePage from "../components/AnimatePage";

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    harga: "",
    daerah: "",
    fasilitas: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  const filteredUnits = Units.filter((unit) => {
    const matchSearch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchDaerah = !filters.daerah || unit.daerah === filters.daerah;
    const matchHarga = !filters.harga || unit.startingPrice === filters.harga;
    const matchFasilitas =
      !filters.fasilitas ||
      unit.facilities.indoor.includes(filters.fasilitas) ||
      unit.facilities.outdoor.includes(filters.fasilitas);

    return matchSearch && matchDaerah && matchHarga && matchFasilitas;
  });

  const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
  const paginatedUnits = filteredUnits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const daerahOptions = [...new Set(Units.map((u) => u.daerah))];
  const hargaOptions = [...new Set(Units.map((u) => u.startingPrice))];
  const fasilitasOptions = [
    ...new Set(
      Units.flatMap((u) => [...u.facilities.indoor, ...u.facilities.outdoor])
    ),
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Header & Search */}
        <div
          className="relative bg-cover bg-center h-auto py-6 sm:h-56 md:h-64 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/images/bg-perfect.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          {/* Search & Filter Icon */}
          <div className="relative z-10 flex w-full max-w-2xl items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari Unit"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-l-full outline-none border border-[#FFE644] text-red-800 bg-white placeholder-yellow-600 focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Filter Icon */}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-white text-red-700 p-2 border border-[#FFE644] rounded-r-full"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h18M6 8h12M4 12h16M8 16h8M10 20h4"
                />
              </svg>
            </button>
          </div>

          {/* Filter Dropdown */}
          {showFilter && (
            <div className="relative z-20 mt-4 w-full max-w-4xl px-2">
              <div className="relative z-30 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-3 justify-between">
                  {/* Daerah */}
                  <select
                    className="bg-white text-red-700 px-4 py-2 rounded-full shadow text-sm focus:outline-none flex-1 min-w-[100px]"
                    value={filters.daerah}
                    onChange={(e) =>
                      setFilters({ ...filters, daerah: e.target.value })
                    }
                  >
                    <option value="">Daerah</option>
                    {daerahOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {/* Harga */}
                  <select
                    className="bg-white text-red-700 px-4 py-2 rounded-full shadow text-sm focus:outline-none flex-1 min-w-[100px]"
                    value={filters.harga}
                    onChange={(e) =>
                      setFilters({ ...filters, harga: e.target.value })
                    }
                  >
                    <option value="">Harga</option>
                    {hargaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {/* Fasilitas */}
                  <select
                    className="bg-white text-red-700 px-4 py-2 rounded-full shadow text-sm focus:outline-none flex-1 min-w-[100px]"
                    value={filters.fasilitas}
                    onChange={(e) =>
                      setFilters({ ...filters, fasilitas: e.target.value })
                    }
                  >
                    <option value="">Fasilitas</option>
                    {fasilitasOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Unit Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedUnits.map((unit) => (
              <Link href={`/DetailUnit/${unit.id}`} key={unit.id}>
                <CardUnit
                  name={unit.name}
                  description={unit.description}
                  image={unit.image}
                  role={unit.daerah}
                  startingPrice={unit.startingPrice}
                />
              </Link>
            ))}
          </div>

          {filteredUnits.length === 0 && (
            <div className="text-center py-10 sm:py-12 text-gray-500 text-sm sm:text-base">
              Tidak ada unit ditemukan.
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10 text-black">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${
                currentPage === 1 ? " cursor-not-allowed" : ""
              }`}
            >
              &lt;
            </button>

            <span className="text-sm font-semibold">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              &gt;
            </button>
          </div>
        )}
      </AnimatePage>
      <Footer />
    </div>
  );
}
