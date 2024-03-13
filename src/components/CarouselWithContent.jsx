import { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Loader } from "./Loader";
import { useQuery } from "react-query";

export const CarouselWithContent = () => {
  const [cachedImages, setCachedImages] = useState([]);

  const {
    data: images,
    isLoading,
    error,
  } = useQuery("images", async () => {
    const response = await fetch("http://localhost:8000/api/images");
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    const imageData = await response.json();

    // Carga las imágenes en caché si aún no están cargadas
    imageData.forEach((image) => {
      if (
        !cachedImages.find((cachedImage) => cachedImage.name === image.name)
      ) {
        const img = new Image();
        img.src = `http://localhost:8000/api/images/name/${encodeURIComponent(
          image.name
        )}`;
        setCachedImages((prevImages) => [...prevImages, image]);
      }
    });

    return imageData;
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error("Error fetching images:", error);
    return <div>Error fetching images</div>;
  }

  return (
    <div className="mt-32 mx-4 md:mx-10 relative">
      <Carousel
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        className="rounded-xl z-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-96 sm:h-80 md:h-96 lg:h-112 xl:h-128"
          >
            <img
              src={`http://localhost:8000/api/images/name/${encodeURIComponent(
                image.name
              )}`}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/25  ">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="sm" color="white">
                    Explore
                  </Button>
                  <Button size="sm" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
