import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import BillboardPage from "@/app/components/billboard";
import ProductCard from "@/components/ui/product-card";

interface CategoryProps {
  params: {
    categoryId: string;
  };
}

export const revalidate = 0;

const CategoryPage: React.FC<CategoryProps> = async ({ params }) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts();

  const productByCategory = products.filter(
    (product) => product.category.id === params.categoryId
  );

  return (
    <div>
      <div className="px-10">
        <BillboardPage data={category.billboard} />
        <div className="px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-4">
            {productByCategory.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
