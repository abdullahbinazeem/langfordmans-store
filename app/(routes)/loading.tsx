import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="loading bg-[#050505] mt-[-10vh] w-full h-[110vh] grid ">
      <div className="loader place-content-center"></div>
    </div>
  );
};

export default Loading;
