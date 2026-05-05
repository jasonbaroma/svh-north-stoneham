"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Rental vans and cars available for hire in North Stoneham" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Self-drive vehicle hire service operating around North Stoneham" }}
    />
  );
}
