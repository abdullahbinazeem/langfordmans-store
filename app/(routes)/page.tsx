import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";

import Image from "next/image";

import HeroBg from "@/public/HeroBg.png";

import HeroPage from "@/components/static-pages/hero-page";
import MissionPage from "@/components/static-pages/mission-page";
import SpecialBanner from "@/components/static-pages/special-banner";
import GalleryPage from "@/components/static-pages/gallery";
import ContactPage from "@/components/static-pages/contact";

export const revalidate = 0;

const Hompage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("52ab43fc-cde8-4537-b82c-a9a794170a9c");

  return (
    <div>
      <Image
        className="absolute top-0 z-[-1] object-cover object-top h-[100vh]"
        src={HeroBg}
        alt="hero background"
      />
      <Container>
        <HeroPage />
        <div className="space-y-10 pb-10" id="shop">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
        <MissionPage />
        <SpecialBanner />
        <GalleryPage />
        <ContactPage />
      </Container>
    </div>
  );
};

export default Hompage;
