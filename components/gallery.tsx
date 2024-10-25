"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../components/ui/button";

const images = [
  "https://i.imgur.com/f2e3lqv.jpeg?height=400&width=600",
  "https://i.imgur.com/AZooRce.jpeg?height=400&width=600",
  "https://i.imgur.com/djybmy7.jpeg?height=400&width=600",
  "https://i.imgur.com/Tv2FxFY.jpeg?height=400&width=600",
  "https://i.imgur.com/CQq9oGV.jpeg?height=400&width=600",
  "https://i.imgur.com/YPU6Gye.jpeg?height=400&width=600",
  "https://i.imgur.com/t56WNof.jpeg?height=400&width=600",
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-info to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Gallery</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="w-full h-[500px] relative">
            <Image
              src={images[currentImage]}
              alt={`Gallery image ${currentImage + 1}`}
              layout="fill"  // This ensures the image fills the container
              objectFit="cover"  // Ensures the image maintains aspect ratio and covers the container
              className="rounded-lg shadow-xl border-4 border-accent"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/40"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
