"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Mixed vehicle hire fleet parked on a clean business park forecourt near North Stoneham" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Staff member handing over a clean rental van to a customer in a tidy forecourt" }}
    />
  );
}
