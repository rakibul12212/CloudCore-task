import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
    >
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          fill
          style={{ objectFit: "fill", objectPosition: "center" }}
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h3>
        <p className="mt-3 text-xl font-bold text-indigo-600">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
