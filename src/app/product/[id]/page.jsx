"use client";

import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="p-8 text-center text-red-600">Product not found</p>;
  }

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
            <p className="text-2xl font-semibold ">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-10">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
