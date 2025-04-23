import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
    >
      <div className="relative w-full h-72 md:h-72">
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          fill
          style={{ objectFit: "fill", objectPosition: "center" }}
          priority
        />
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h3>
        <p className=" text-xl font-bold ">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
