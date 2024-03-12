import React from "react";

export const PromoCard = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start mt-32 mx-10">
      {/* Slide 1 */}
      <div className="w-full lg:w-1/2 px-4">
        <div className="relative mb-10 sm:h-[500px] lg:h-[440px] xl:h-[500px]">
          <img
            className="object-cover object-center w-full h-full"
            alt="category"
            src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-01.jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full px-6 py-10 sm:px-10">
            <div className="max-w-[400px]">
              <span className="block mb-3 text-base font-medium text-body-color">
                {"#House"}
              </span>
              <a
                className="text-xl font-semibold text-dark lg:text-2xl xl:leading-10 xl:text-[28px]"
                href="/#"
              >
                {"Express Your Beautiful Life Through Furniture"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="w-full lg:w-1/2 lg:px-4">
        <div className="flex flex-wrap lg:flex-col">
          <div className="w-full sm:w-1/2 lg:w-full mb-10 px-2">
            <div className="relative h-[180px] sm:h-[230px] lg:h-[200px] xl:h-[230px]">
              <img
                className="object-cover object-center w-full h-full"
                alt="category"
                src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-02.jpg"
              />
              <div className="absolute top-0 left-0 w-full h-full px-6 py-10 sm:px-10">
                <div className="max-w-[400px]">
                  <span className="block mb-3 text-base font-medium text-body-color">
                    {"#Accessories"}
                  </span>
                  <a
                    className="text-xl font-semibold text-dark lg:text-2xl xl:leading-10 xl:text-[28px]"
                    href="/#"
                  >
                    {"Discover Our Accessories Collection"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="w-full sm:w-1/2 lg:w-full mb-10 px-2">
            <div className="relative h-[180px] sm:h-[230px] lg:h-[200px] xl:h-[230px]">
              <img
                className="object-cover object-center w-full h-full"
                alt="category"
                src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-03.jpg"
              />
              <div className="absolute top-0 left-0 w-full h-full px-6 py-10 sm:px-10">
                <div className="max-w-[400px]">
                  <span className="block mb-3 text-base font-medium text-body-color">
                    {"#Office"}
                  </span>
                  <a
                    className="text-xl font-semibold text-dark lg:text-2xl xl:leading-10 xl:text-[28px]"
                    href="/#"
                  >
                    {"Make Your Workspace More Comfortable"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
