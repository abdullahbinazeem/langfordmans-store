import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";

export const revalidate = 0;

const Hompage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("52ab43fc-cde8-4537-b82c-a9a794170a9c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Hompage;
