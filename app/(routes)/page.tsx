import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import ProductList from "@/components/product-list";

import Image from "next/image";

import HeroBg from "@/public/HeroBg.jpg";

import HeroPage from "@/components/static-pages/hero-page";
import MissionPage from "@/components/static-pages/mission-page";
import SpecialBanner from "@/components/static-pages/special-banner";
import GalleryPage from "@/components/static-pages/gallery";
import ContactPage from "@/components/static-pages/contact";
import getGallery from "@/actions/get-gallery";

export const revalidate = 0;

const Hompage = async () => {
  const products = await getProducts({ isFeatured: true });
  const gallery = await getGallery();
  const billboard = await getBillboard("c819e2b2-d979-4ca6-b41f-e8bd90d037aa");

  return (
    <div>
      <Image
        fill
        sizes="100vh"
        quality={100}
        src={HeroBg}
        alt="hero background"
        style={{
          objectFit: "cover",
        }}
        className="z-[-50]"
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
        <GalleryPage gallery={gallery} />
        <ContactPage />
      </Container>
    </div>
  );
};

export default Hompage;
