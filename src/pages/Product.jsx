import { ProductOverview, ProductRecomandations } from "../components";

export const Product = () => {
  return (
    <>
      <div className="mt-24">
        <ProductOverview />
        <ProductRecomandations />
      </div>
    </>
  );
};
