"use client";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import ImageTab from "./image-tab";
import Image from "next/image";

interface ImageInfoProps {
  images: ImageType[];
}

const ImageInfo: React.FC<ImageInfoProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse p-10">
      <div className="mx-auto mt-6 w-full max-w-2xl">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <ImageTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full rounded-md">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full overflow-hidden">
              <Image
                fill
                alt="Ảnh sản phẩm"
                src={image.url}
                className="object-cover object-center rounded-md"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageInfo;
