import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-3 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-[1.5/1] md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex h-full w-full flex-col justify-center items-center text-center gap-y-8">
          <div className="backdrop-blur-sm bg-white/5 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs p-3 ">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
