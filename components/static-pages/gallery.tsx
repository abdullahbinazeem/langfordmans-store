"use client";

import Image from "next/image";
import { Gallery, GalleryImage } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryProps {
  gallery: Gallery;
}

const GalleryPage: React.FC<GalleryProps> = ({ gallery }) => {
  console.log(gallery);

  const [maxImage, setMaxImage] = useState(5);

  return (
    <div className="my-20" id="gallery">
      <div className="sm:mb-15 mb-5">
        <h1 className="text-black sm:text-5xl text-4xl font-semibold">
          Our Gallery
        </h1>
      </div>
      <div className="mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4">
        <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center">
          {gallery.images.slice(0, maxImage).map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </div>
      <div className="text-center">
        {gallery.images.length > 5 ? (
          maxImage == 5 ? (
            <p
              className="cursor-pointer font-bold text-lg transition  text-primary hover:underline underline-offset-4 "
              onClick={() => {
                setMaxImage(1000);
              }}
            >
              See more
            </p>
          ) : (
            <p
              className="cursor-pointer font-bold text-lg transition  text-neutral-400 hover:underline underline-offset-4 "
              onClick={() => {
                setMaxImage(5);
              }}
            >
              See less
            </p>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

function BlurImage({ image }: { image: GalleryImage }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt=""
      src={image.url}
      width={0}
      height={0}
      sizes="100vw"
      objectFit="contain"
      className={cn(
        "duration-700  h-[250px] w-[400px] lg:h-[150px] 2xl:h-[200px] md:w-auto ease-in-out group-hover:opacity-75 object-cover md:object-contain",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default GalleryPage;
