"use client";
import Image from "next/image";

const CardUnit = ({ name, description, image, role = "Mahasiswa" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full flex flex-col h-full">
      {/* Gambar */}
      <div className="relative w-full h-40 sm:h-44 bg-white rounded-lg overflow-hidden">
        <Image src={image} alt={name} className="w-full h-full object-cover" width={500} height={500} />
      </div>

      {/* Konten */}
      <div className="bg-[#F7F5EB] px-4 py-4 flex flex-col justify-between flex-1">
        {/* Role */}
        <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
          {role}
        </span>

        {/* Nama & Deskripsi */}
        <div className="mb-4 min-h-[88px]">
          {" "}
          {/* Tinggi minimum konten agar seragam */}
          <h3 className="text-base font-bold text-gray-800 line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-gray-700 mt-1 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tombol */}
        <button className="bg-[#C08931] text-white px-4 py-2 rounded-xl hover:bg-[#a87427] transition-all duration-200 w-full text-sm font-semibold">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CardUnit;
