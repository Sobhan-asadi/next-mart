import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

export default function StorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
