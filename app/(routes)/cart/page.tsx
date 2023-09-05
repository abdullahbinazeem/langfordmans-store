import Container from "@/components/ui/container";
import CartClient from "./components/cart-client";

export const revalidate = 0;

const CartPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 pb-80 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <CartClient />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
