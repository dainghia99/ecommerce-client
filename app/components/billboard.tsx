import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const BillboardPage: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl w-full h-96 overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="px-16 font-bold text-6xl text-center h-full w-full flex items-center justify-center z-50 text-neutral-800">
          {data.label}
        </div>
      </div>
    </div>
  );
};

export default BillboardPage;
