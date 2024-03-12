import { Carousel, Typography, Button } from "@material-tailwind/react";
import p1 from "../assets/product 1.png";
import p2 from "../assets/product 2.png";
import p3 from "../assets/product 3.jpg";
export const CarouselWithContent = () => {
  return (
    <div className="mt-32 mx-4 md:mx-10 relative">
      <Carousel
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        className="rounded-xl z-0"
      >
        <div className="relative h-96 sm:h-80 md:h-96 lg:h-112 xl:h-128">
          <img src={p1} alt="image 1" className="h-full w-full object-cover " />
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
        <div className="relative h-96 sm:h-80 md:h-96 lg:h-112 xl:h-128">
          <img src={p2} alt="image 2" className="h-full w-full object-cover" />
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
        <div className="relative h-96 sm:h-80 md:h-96 lg:h-112 xl:h-128">
          <img src={p3} alt="image 3" className="h-full w-full object-cover " />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/25   ">
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
      </Carousel>
    </div>
  );
};
