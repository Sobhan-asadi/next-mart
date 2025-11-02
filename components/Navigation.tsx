import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="bg-primary fixed top-0 right-0 left-0 py-4 shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Search Products */}
          <div className="mx-8 hidden max-w-lg grow md:block">
            <form className="group relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="focus:ring-honey w-full rounded-full border border-white/20 bg-white/10 py-2 pr-10 pl-4 text-white transition-all placeholder:text-white/60 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer rounded-full p-1 text-white/70 transition-colors hover:text-white"
              >
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
          {/*  Products */}
          <div className="hidden items-center space-x-4 md:flex">
            <div className="group">
              <button className="hover:text-honey flex cursor-pointer items-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10">
                <i className="bx bx-store mr-1 text-2xl"></i>
                <span className="hidden text-base font-medium md:inline">
                  Products
                </span>
                <i className="bx bx-chevron-down ml-1"></i>
              </button>
            </div>
            {/* Cart */}
            <Link
              href="/cart"
              className="hover:text-honey flex items-center justify-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10"
            >
              <i className="bx bx-cart text-2xl"></i>
            </Link>
            {/* Login */}
            <Link
              href="login"
              className="hover:text-honey flex items-center justify-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10"
            >
              <i className="bx bx-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
