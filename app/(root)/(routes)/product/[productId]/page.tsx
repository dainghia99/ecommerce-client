import getProduct from "@/actions/get-product";
import ImageInfo from "@/app/components/image-info";
import InfiProduct from "@/components/info-product";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  return (
    <div className="px-10 my-4">
      <div className="lg:grid lg:grid-cols-2">
        <ImageInfo images={product.images} />
        <InfiProduct data={product} />
      </div>
    </div>
  );
};

export default ProductPage;
