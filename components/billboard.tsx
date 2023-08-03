import { Billboard } from "@/types";
import NextImage from "next/image";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-3 sm:p-6 lg:p-8 rounded-xl overflow-hidden relative">
      <NextImage
        fill
        src={`${data?.imageUrl}`}
        alt="Image"
        className="object-cover object-center"
      />
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="flex h-full w-full flex-col justify-center items-center text-center gap-y-8">
          <div className="backdrop-blur-sm bg-white/5 font-semibold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs p-3 ">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
