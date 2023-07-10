import { Size } from "@/types";
import getProducts from "./get-products";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (categoryId: string): Promise<Size[]> => {
  let size: Size[] = [];

  const products = await getProducts({
    categoryId: categoryId,
  });

  products.forEach((element) => {
    for (let i = 0; i < size.length; i++) {
      if (element.size.name == size[i].name) {
        return;
      }
    }
    size.push(element.size);
  });

  return size;
};

export default getSizes;
