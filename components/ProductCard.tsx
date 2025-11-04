import { Product } from "@/data/products";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  categorySlug: string;
  categoryColor: string;
}

export default function ProductCard({
  product,
  categorySlug,
  categoryColor,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="h-full max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-gray-100 p-6">
        <h2 className="text-primary mb-2 line-clamp-1 text-lg font-bold">
          {product.name}
        </h2>
        <p className="text-primary/80 mb-4 line-clamp-2 text-sm">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-xl font-bold text-[#d1495b]"
            style={{ color: categoryColor }}
          >
            ${product.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <Link
              href="/products/smartphones"
              className="flex items-center justify-center rounded-full bg-[#d1495b] px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: categoryColor }}
            >
              View Details
            </Link>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#d1495b] text-white"
              style={{ backgroundColor: categoryColor }}
            >
              <i className="bx bx-cart text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
