"use client";

import { use, useState } from "react";
import { Units } from "../../../data/units";
import Footer from "../../components/Footer";
import { HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import { generateWhatsAppLink } from "@/data/adminContacts";

export default function DetailUnit({ params }) {
  const { id } = use(params);
  const unit = Units.find((u) => u.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(unit?.image || "");

  if (!unit)
    return <div className="p-10 text-center">Unit tidak ditemukan</div>;

  return (
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <div
        className="relative w-full h-28 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/RD-topdetailunit.png)" }}
      >
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-white/90 text-black px-3 py-2 sm:px-3 sm:py-3 rounded-full shadow font-medium flex items-center gap-1 sm:gap-2 hover:bg-gray-100 transition text-sm sm:text-base"
        >
          <HiArrowLeft className="text-lg sm:text-xl" />
          <span className="hidden sm:inline"></span>
        </button>
      </div>

      {/* Section Atas */}
      <div className="flex flex-col md:flex-row px-6 sm:px-10 py-10 gap-10 items-start">
        {/* Gambar & Galeri */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Gambar Utama */}
          <Image
            src={selectedImage}
            alt={unit.name}
            className="w-full h-[300px] object-cover rounded-xl"
            width={500}
            height={300}
          />

          {/* Galeri Thumbnail */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-max">
              {[unit.image, ...(unit.gallery || [])].map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-30 h-20 object-cover rounded-lg border cursor-pointer ${
                    selectedImage === img ? "border-2 border-yellow-500" : ""
                  }`}
                  alt={`thumb-${idx}`}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Informasi Unit */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 text-black">
          <h2 className="text-2xl font-bold">{unit.name}</h2>

          {/* Fasilitas */}
          <div className="text-sm">
            <p className="font-semibold mb-1">Fasilitas</p>
            <div className="flex gap-10">
              <div>
                <p className="font-semibold">Indoor:</p>
                <ul className="list-disc ml-5">
                  {unit.facilities.indoor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold">Outdoor:</p>
                <ul className="list-disc ml-5">
                  {unit.facilities.outdoor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Harga Sewa */}
          <div className="">
            <p className="font-bold text-2xl">Harga Sewa</p>
            <p className="text-gray-500 text-base">Mulai dari</p>
            <p className="text-xl font-bold text-[#C08931]">
              {unit.startingPrice ?? "Rp -"}
            </p>
          </div>

          {/* Lokasi, Kapasitas, Status */}
          <div className="flex gap-2 flex-wrap text-sm">
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.daerah}
            </span>
            {/* <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.maxCapacity}
            </span> */}
            {/* <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.status}
            </span> */}
          </div>

          {/* Tombol Sewa */}
          <div className="pt-2">
              <a
                href={generateWhatsAppLink(unit)}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 w-full rounded-full shadow">
                  Sewa Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
}
