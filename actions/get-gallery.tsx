import { Gallery } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/gallery`;

const getGallery = async (): Promise<Gallery> => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getGallery;
