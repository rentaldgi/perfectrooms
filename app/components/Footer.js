"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen bunga kiri atas */}
      <Image
        src="/images/footerkanan.png"
        alt="Flower Top Left"
        className="absolute top-[-10px] left-0 w-140 z-0"
        width={50}
        height={50}
      />

      {/* Ornamen bunga kanan bawah */}
      <Image
        src="/images/footerkiri.png"
        alt="Flower Bottom Right"
        className="absolute bottom-[-10px] right-0 w-100 mb-10 z-0"
        width={50}
        height={50}
      />

      {/* Konten utama */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Media Sosial & Bank */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            {/* <Link href="#"><Image src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" /></Link> */}
            {/* tiktok */}
            <Link
              href="https://www.tiktok.com/@perfectrooms.id?_t=ZS-8yJQHyTqH7i&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon_tt.png"
                alt="Instagram"
                className="w-8 h-8"
                width={50}
                height={50}
              />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/6281280007220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon_wa.png"
                alt="WhatsApp"
                className="w-7 h-7"
                width={50}
                height={50}
              />
            </Link>

             {/* Instagram */}
            <Link
              href="https://www.instagram.com/perfectrooms.id?utm_source=ig_web_button_share_sheet&igsh=MW5uNjhkZjZhc3Fhaw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icon_ig.png" alt="Instagram" width={28} height={28} className="w-6 h-6" />
            </Link>
          </div>

         {/* Logo Bank */}
          <div className="mt-0 bg-[#C08931] py-2 px-4 rounded-full flex flex-wrap items-center justify-center gap-4 shadow-md z-10 w-fit md:w-auto">
            <Image src="/images/pm_bni.png" alt="BNI" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_bca.png" alt="BCA" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mandiri.png" alt="Mandiri" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_qris.png" alt="QRIS" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mastercard.png" alt="Mastercard" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_visa.png" alt="Visa" width={24} height={24} className="w-8 h-8 object-contain" />
          </div>
        </div>

        {/* Kolom 2: Halaman + Kontak */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Halaman */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-yellow-500">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-yellow-500">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/DaftarUnit" className="hover:text-yellow-500">
                  Daftar Unit
                </Link>
              </li>
              <li>
                <Link href="/Testimoni" className="hover:text-yellow-500">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/Kontak" className="hover:text-yellow-500">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mb-1">
              <Link
                href="mailto:ptdahliglobalindo@gmail.com"
                className="hover:text-yellow-500"
              >
                ptdahliglobalindo@gmail.com
              </Link>
            </p>
            <p>
              <Link href="tel:+6285724785060" className="hover:text-yellow-500">
                (+62) 812-8000-7220
              </Link>
            </p>
            <p className="text-xs text-gray-600">Admin</p>
          </div>
        </div>

        {/* Kolom 3: Alamat */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>
            <Link
              href="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung,+Jawa+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Kawasan, Apartment Grand Kamala Lagoon,
              <br />
              Jl. KH. Noer Ali, RT.001/RW.002, Pekayon Jaya,
              <br></br>Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat 17148
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#C08931] py-2 text-center text-xs text-black">
        @ptdahliglobalindo. Hak Cipta Dilindungi oleh undang-undang.
      </div>
    </footer>
  );
}
