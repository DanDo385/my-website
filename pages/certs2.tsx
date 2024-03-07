// pages/certs.tsx
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';  

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define an array with the paths to your images
const imagePaths = [
  './pennst/psu1',
  './pennst/psu2',
  './pennst/psu3',
  './pennst/psu4', // Corrected path
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {imagePaths.map((path, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              {/* Replace Card component with an img tag to display the image */}
              <img src={path} alt={`Image ${index + 1}`} className="max-w-full h-auto" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

