import getProducts from "@/actions/get-products";
import getCategory from "@/actions/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import SelectFilter from "./components/select-filter";
import RequestForm from "@/components/requestForm";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-10">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid mt-15 px-5 sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <RequestForm />
      </Container>
    </div>
  );
};

export default CategoryPage;
