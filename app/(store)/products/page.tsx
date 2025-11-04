import Image from "next/image";
import Link from "next/link";

import { categories, productsList } from "@/data/products";

export default function ProductsPage() {
  const gatCategoryImage = (categorySlug: string): string => {
    const categoryProduct = productsList.find(
      (product) => product.category === categorySlug,
    );
    return categoryProduct?.image || "/images/placeholder.png";
  };

  return (
    <div className="mx-auto mb-16 max-w-7xl px-4 pt-24">
      {/* Categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href="products"
            className="group relative overflow-hidden rounded-xl border-b-4 bg-white shadow-md transition-all hover:translate-y-[-5px] hover:shadow-lg"
            style={{ borderColor: category.color }}
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <Image
                src={gatCategoryImage(category.slug)}
                alt={category.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-0 bottom-0 left-0 h-12 bg-linear-to-t from-white to-transparent"></div>
            </div>
            <div className="p-6">
              <h3
                className="text-primary mb-2 text-xl font-bold transition-colors group-hover:text-[#00798c]"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>
              <p className="text-primary mb-4 text-sm">
                {category.description}
              </p>
              <div
                className="flex items-center justify-end text-sm font-medium transition-colors"
                style={{ color: category.color }}
              >
                <span className="mr-1">View Products</span>
                <i className="bx bx-chevron-right transform text-xl transition-transform group-hover:translate-x-1"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Bottom Navigation */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <Link
          href="/"
          className="hover:text-primary inline-flex items-center text-[#00798c] transition-colors"
        >
          <i className="bx bx-arrow-back mr-2"></i>Back to Home
        </Link>
      </div>
    </div>
  );
}
