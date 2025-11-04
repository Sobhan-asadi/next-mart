import ProductCard from "@/components/ProductCard";
import { categories, productsList } from "@/data/products";

import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;

  const categorySlug = resolvedParams.category.toLocaleLowerCase();
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug);
  const categoryName = categoryInfo?.name || resolvedParams.category;

  const categoryProducts = productsList.filter(
    (product) => product.category.toLowerCase() === categorySlug,
  );

  const CategoryColor = categoryInfo?.color || "#003d5b";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Cattegory Banner */}
      <div className="from-primary relative mb-12 overflow-hidden rounded-2xl bg-linear-to-r to-[#00798c] px-8 py-4 text-white">
        <div className="relative z-10">
          <h1 className="mb-3 text-4xl font-bold">
            {categoryInfo?.name || "Category"}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Explore our selection of premium {categoryName.toLocaleLowerCase()}{" "}
            desiged for exceptional performance
          </p>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryColor={CategoryColor}
            categorySlug={categorySlug}
          />
        ))}
      </div>
      {/* Back Products */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <Link
          href="/products"
          className="hover:text-primary inline-flex items-center text-[#00798c] transition-colors"
        >
          <i className="bx bx-left-arrow-alt mr-2 text-xl"></i>Back to All
          Categories
        </Link>
      </div>
    </div>
  );
}
