import { FC } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the carousel styles

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  return (
    <ResponsiveCarousel>
      {images.map((src, index) => (
        <div key={index} className="carousel-item">
          <Image src={src} alt={`Certificate ${index + 1}`} width={500} height={300} layout="responsive" />
        </div>
      ))}
    </ResponsiveCarousel>
  );
}

export default Carousel;
