"use client";

import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="p-8 text-center text-red-600">Product not found</p>;
  }

  const router = useRouter();
  const handleOrderClick = () => {
    router.push(`/order/${id}`);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md p-6 mt-5">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/2 h-96 rounded-md overflow-hidden">
            <Image
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {product.name}
            </h1>
            <p className="mb-6 text-gray-700 whitespace-pre-line text-xs">
              {product.short_desc}
            </p>
            <div className="flex items-center gap-x-5">
              <p className="text-2xl font-semibold ">${product.price}</p>
              <div className="bg-black hover:bg-gray-500 px-3 py-1 text-white text-sm rounded">
                <button
                  onClick={handleOrderClick}
                  className="bg-black hover:bg-gray-500 px-3 py-1 text-white text-sm rounded"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
