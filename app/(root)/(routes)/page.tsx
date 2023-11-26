import getProducts from "@/actions/get-products";
import BillboardPage from "../../components/billboard";
import getBillboard from "@/actions/get-billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("b2f867ce-c7bd-44c9-8ff9-e452752d6465");
  const products = await getProducts();
  const productIsFeatured = products.filter(
    (product) => product.isFeatured === true
  );

  return (
    <div className="px-10">
      <div className="mb-6">
        <BillboardPage data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList
          title="Sản phẩm đặc sắc nhất hiện nay"
          items={productIsFeatured}
        />
      </div>
    </div>
  );
};

export default HomePage;
