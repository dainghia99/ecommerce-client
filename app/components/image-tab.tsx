import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface ImageTabProps {
  image: ImageType;
}

const ImageTab: React.FC<ImageTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square flex cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="Ảnh sản phẩm"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default ImageTab;
