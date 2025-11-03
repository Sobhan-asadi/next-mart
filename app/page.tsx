/** @format */

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="from-primary relative mb-16 h-[80vh] overflow-hidden bg-linear-to-r to-[#00798c]">
        <div className="mx-auto flex h-full max-w-7xl flex-col px-4 pt-24">
          <div className="flex grow flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="z-10 w-1/2 text-center md:mb-10 md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
                <div className="mb-2">
                  Discover <span className="text-honey">Premium</span>
                </div>
                <p>Products</p>
              </h1>
              <p className="mb-10 max-w-lg text-xl text-white/80">
                Experience exceptional quality and service with our curated
                selection of premium products.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Link
                  href="/products"
                  className="flex transform items-center justify-center rounded-full bg-[#d1495b] px-8 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-[#d1495b]/90"
                >
                  Shop Now
                  <i className="bx bx-chevron-right ml-1 text-xl"></i>
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="relative z-10 flex w-1/2 justify-center md:justify-end">
              <Link href="/products" className="group relative cursor-pointer">
                <div className="absolute -inset-4 animate-pulse rounded-full bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20"></div>
                <div className="rotate-3 transform rounded-2xl bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:rotate-0">
                  <Image
                    src="/images/product001.png"
                    alt="featured PRODUCT Image"
                    width={500}
                    height={400}
                    className="rounded-lg object-contain drop-shadow-2xl"
                  />
                  <div className="bg-honey absolute -right-4 -bottom-4 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg">
                    NEW ARRIVAL
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
