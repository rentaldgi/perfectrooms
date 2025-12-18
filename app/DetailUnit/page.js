"use client";

import { Units } from "@/data/units";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import Image from "next/image";

export default function DetailUnit({ params }) {
  const id = params?.id;
  const unit = Units.find((u) => u.id === parseInt(id));

  if (!unit)
    return <div className="p-10 text-center">Unit tidak ditemukan</div>;

  return (
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <div
        className="relative w-full h-28 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/RD-topdetailunit.png)" }}
      >
        <BackButton />
      </div>

      {/* Section Atas */}
      <div className="flex flex-col md:flex-row px-6 sm:px-10 py-10 gap-10 items-start">
        {/* Gambar & Galeri */}
        <div className="flex flex-row gap-4 w-full md:w-1/2">
          <div className="flex flex-col gap-2 w-20">
            {unit.gallery.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                className="h-14 w-14 object-cover rounded-lg border"
              />
            ))}
          </div>
          <Image
            src={unit.image}
            alt={unit.name}
            className="flex-1 h-[280px] sm:h-[320px] object-cover rounded-xl"
          />
        </div>

        {/* Informasi Unit */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
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
          <div className="text-sm mt-4">
            <p className="font-semibold">Harga Sewa</p>
            <p className="text-gray-500 text-base">Mulai dari</p>
            <p className="text-xl font-bold text-[#C08931]">
              {unit.startingPrice || "Rp -"}
            </p>
          </div>

          {/* Tag lokasi & kapasitas */}
          <div className="flex gap-2 flex-wrap text-sm">
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.daerah}
            </span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.maxCapacity}
            </span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">
              {unit.status}
            </span>
          </div>

          {/* Tombol Sewa */}
          <div className="pt-2">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 w-full rounded-full shadow">
              Sewa Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Daftar Harga */}
      {unit.prices && (
        <div className="bg-yellow-400 px-6 sm:px-10 py-12 text-black">
          <div className="relative mb-10">
            <h3 className="text-xl font-bold text-center bg-white inline-block px-6 py-2 rounded-full mx-auto">
              Daftar Harga
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Weekday */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-center font-semibold text-lg mb-4">
                Weekday
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-gray-700">
                    <th className="py-2 text-left">Lama Penyewaan</th>
                    <th className="py-2 text-right">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(unit.prices.weekday || {}).map(
                    ([durasi, harga], idx) => (
                      <tr key={idx}>
                        <td className="py-1">{durasi}</td>
                        <td className="py-1 text-right">{harga}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* Weekend */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-center font-semibold text-lg mb-4">
                Weekend
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-gray-700">
                    <th className="py-2 text-left">Lama Penyewaan</th>
                    <th className="py-2 text-right">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(unit.prices.weekend || {}).map(
                    ([durasi, harga], idx) => (
                      <tr key={idx}>
                        <td className="py-1">{durasi}</td>
                        <td className="py-1 text-right">{harga}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
