


import ProductCard from "./ProductCard";

const AllProduct = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;

