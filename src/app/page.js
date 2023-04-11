import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "../components/HeroBanner";

export default function HomePage() {
  return (
    <html>
      <head>
        <title>Big Dart E-Commerce | Anasayfa</title>
      </head>
      <body>
        <main>
          <Navbar />
          <HeroBanner />
        </main>
      </body>
    </html>
  );
}
