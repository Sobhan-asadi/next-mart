import Link from "next/link";

import { categories } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="mb-2 text-3xl font-bold text-white">
                Join or newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products, promotions, and tech news delivered to
                your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="focus:ring-honey min-w-60 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white transition-all focus:ring-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-honey hover:bg-honey/90 flex transform cursor-pointer items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition-all hover:scale-105"
                >
                  Subscribe <i className="bx bx-envelope ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* main footer content */}
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="mb-6 flex items-center">
              <div className="bg-honey text-primary mr-2 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold">
                NM
              </div>
              <span className="text-primary text-xl font-bold">
                Next<span className="text-honey">Mart</span>
              </span>
            </Link>
            <p className="mb-6 text-gray-600">
              Elevating your tech experience with premium products and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (platform) => (
                  <a
                    href="#"
                    key={platform}
                    className="group hover:bg-primary flex h-9 w-9 transform items-center justify-center rounded-full bg-gray-100 hover:scale-110"
                  >
                    <i
                      className={`bx bxl-${platform} text-xl text-gray-500 transition-colors group-hover:text-white`}
                    ></i>
                  </a>
                ),
              )}
            </div>
          </div>
          {/* Categories */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-primary mb-4 text-lg font-bold">Categories</h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href="/products"
                    className="hover:text-primary inline-flex items-center text-gray-600 transition-all hover:translate-x-1"
                  >
                    <span className="bg-honey mr-2 inline-block h-1.5 w-1.5 rounded-full opacity-70"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-primary group inline-flex items-center font-medium transition-all hover:translate-x-1 hover:text-[#003d5b]"
                >
                  View All
                  <i className="bx bx-right-arrow-alt ml-1 opacity-70 transition-transform group-hover:translate-x-1"></i>
                </Link>
              </li>
            </ul>
          </div>
          {/* Shop */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-primary mb-4 text-lg font-bold">Shop</h3>
            <ul className="space-y-2.5">
              {[
                "All Products",
                "New Arrivals",
                "Best Sellers",
                "Deals",
                "Gift",
                "Cards",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block text-gray-600 transition-all hover:translate-x-1 hover:text-[#00798c]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support  */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-primary mb-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2.5">
              {["Contact Us", "Shipping", "Returns", "Track Order", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block text-gray-600 transition-all hover:translate-x-1 hover:text-[#00798c]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-primary mb-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2.5">
              {["About Us", "Blog", "Careers", "Press", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="inline-block text-gray-600 transition-all hover:translate-x-1 hover:text-[#00798c]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Bootom Bar */}
      <div className="border-t border-green-200">
        <div className="mx-auto max-w-7xl p-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-500 md:mb-0">
              &copy; {currentYear} StoreBrand. All rights reserved.
            </div>
            <div className="flex items-center">
              <div className="mr-6 hidden items-center space-x-3 sm:flex">
                {["visa", "payPal", "MasterCard", "Apple"].map((method) => (
                  <div className="text-gray-400" key={method}>
                    <i
                      className={`bx bxl-${method.toLocaleLowerCase()} text-xl`}
                    ></i>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="hover:text-primary text-sm text-gray-500"
                >
                  Terms
                </a>
                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                <a
                  href="#"
                  className="hover:text-primary text-sm text-gray-500"
                >
                  Privacy
                </a>
                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                <a
                  href="#"
                  className="hover:text-primary text-sm text-gray-500"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
