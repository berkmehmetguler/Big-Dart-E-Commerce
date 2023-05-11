import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";

export default function HomePage( ) {
  return (
    <html>
      <head>
        <title>Big Dart E-Commerce | Anasayfa</title>
      </head>
      <body>
        <main>
          <Navbar />
          <HeroBanner />
          <Footer />  
        </main>
      </body>
    </html>
  );
}
