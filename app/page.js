"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

function formatTanggalIndo(tanggalString) {
  const tanggal = new Date(tanggalString);
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://backend.ptdahliaglobalindo.id/article?entity=SEWA_APARTMENT")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 3)); // Ambil 3 artikel pertama
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
        <Image
          src="/images/sewaapartemen_bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-[#C08931cc]/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 py-10 flex justify-end">
          <div className="text-end max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight text-white drop-shadow">
              Perfect Room
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-white drop-shadow">
              Nikmati pengalaman tinggal di apartemen modern <br />
              tanpa beban biaya mahal. Proses sewa mudah, <br />
              cepat, dan aman.
            </p>
            <div className="mt-6 flex justify-end gap-2 flex-wrap">
              <a
                href="/unit"
                className="bg-[#C08931] text-white px-6 py-2 rounded-l-full shadow hover:bg-yellow-300"
              >
                Lihat Apartemen
              </a>
              <a
                href="/kontak"
                className="bg-[#C08931] text-white px-6 py-2 rounded-r-full shadow hover:bg-yellow-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white text-[#C08931] py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ["icon_pelayanan.png", "Pelayanan Terbaik"],
              ["icon_keamanan.png", "Keamanan Terjaga"],
              ["icon_perawatan.png", "Perawatan Rutin"],
              ["icon_lokasi.png", "Lokasi Strategis"],
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <Image
                  src={`/images/${icon}`}
                  className="w-10 h-10"
                  alt="icon"
                  width={100}
                  height={100}
                />
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Artikel Terbaru --- */}
      <section className="bg-[#C08931] px-4 sm:px-8 md:px-20 py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Artikel Besar */}
          {articles[0] && (
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-[2100px] h-auto lg:h-[500px] overflow-hidden">
              <div className="w-full h-64 lg:h-80 relative">
                <Image
                  src={`https://backend.ptdahliaglobalindo.id/${articles[0].thumbnail}`}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <Link
                  href={`/artikel/${articles[0].slug}`}
                  className="absolute bottom-3 right-3 bg-white text-sm text-black px-4 py-1 rounded-full shadow hover:bg-gray-200"
                >
                  Lihat Detail Artikel
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-black">
                  {articles[0].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {articles[0].content}
                </p>
              </div>
            </div>
          )}

          {/* Dua Artikel Kecil - Mobile: Seperti Artikel Besar, Desktop: Tetap Kecil */}
          <div className="w-full flex flex-col gap-4">
            {[articles[1], articles[2]].map(
              (item, index) =>
                item && (
                  <Link
                    key={index}
                    href={`/artikel/${item.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col w-full"
                  >
                    <div className="w-full h-64 lg:h-30 relative">
                      <Image
                        src={`https://backend.ptdahliaglobalindo.id/${item.thumbnail}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base lg:text-sm font-semibold text-black line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm lg:text-xs text-gray-600 line-clamp-2">
                        {item.content}
                      </p>
                    </div>
                  </Link>
                )
            )}

            {/* Tombol Jelajahi Artikel */}
            <Link
              href="/artikel"
              className="bg-white text-center text-black font-semibold py-2 rounded-xl shadow hover:bg-yellow-100 mt-2"
            >
              Jelajahi Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-[#FFFFFF] py-10 px-6 md:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Perfect Room</h2>
            <h3 className="text-xl font-semibold mb-3">
              Sewa Apartemen Bekasi
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Perfect Room hadir untuk memenuhi kebutuhan masyarakat modern yang
              mencari hunian nyaman, strategis, dan siap huni tanpa ribet. Kami
              menyediakan layanan sewa kamar apartemen di Bekasi dengan
              fasilitas lengkap, lingkungan yang aman, serta harga yang
              kompetitif.
              <br />
              <br />
              Melalui Perfect Room, Anda dapat menikmati proses pemesanan yang
              cepat, pilihan unit yang terawat, dan layanan pelanggan yang ramah
              serta responsif. Komitmen kami adalah memberikan hunian yang tidak
              hanya nyaman, tetapi juga mendukung gaya hidup praktis dan modern
              bagi setiap pelanggan.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/bgkolam.png"
              alt="Produk Apartemen"
              className="w-full max-w-sm mx-auto drop-shadow-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Kenapa Harus Memilih */}
      <section className="bg-[#C08931] text-black px-4 py-10 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug text-center">
            Kenapa Harus Memilih Perfect Room?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["icon-syarat.png", "Syarat Sewa yang Ringan dan Tidak Ribet"],
              ["icon-verif.png", "Beragam Tipe Unit Tersedia Sesuai Kebutuhan"],
              ["icon-kualitas.png", "Privasi Pelanggan Terjamin Aman"],
              ["icon-terbuka.png", "Bisa Request Unit Sesuai Preferensi"],
              ["icon-pembayaran.png", "Sewa Mudah Tanpa Deposit"],
              [
                "icon-cod.png",
                "Tersedia Sewa Harian, Mingguan, hingga Bulanan",
              ],
            ].map(([icon, text], i) => (
              <div
                key={i}
                className="bg-white text-black p-3 rounded shadow flex items-center gap-3 h-[90px] w-full max-w-full sm:max-w-[480px]"
              >
                <Image
                  src={`/images/${icon}`}
                  className="w-16 h-16 object-contain"
                  alt="icon"
                  width={100}
                  height={100}
                />
                <p className="text-base font-semibold sm:text-lg leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen & Showcase */}
      <section
        className="relative bg-cover bg-center py-14 px-4 text-white"
        style={{ backgroundImage: "url('/images/bg_isigaleri.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-lg sm:text-xl mb-4">
            Kami berkomitmen untuk menyediakan unit apartemen terbaik bagi
            setiap penyewa, <br className="hidden sm:block" />
            karena kenyamanan, kepuasan, dan keamanan Anda adalah prioritas
            utama kami.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            NIKMATI WAKTU TERBAIKMU
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={`/images/isi${n}.png`}
                  alt={`Motor ${n}`}
                  className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>

          <a
            href="/DaftarUnit"
            className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            Lihat Daftar Unit Perfect Room
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
