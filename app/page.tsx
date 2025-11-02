/** @format */

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="grow pt-24">
        <Link href="/products" className="text-blue-500">
          Go to Products
        </Link>
      </div>
      <Footer />
    </div>
  );
}
