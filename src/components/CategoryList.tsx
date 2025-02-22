import IMAGES from "@/data/images.json";
import Image from "next/image";

export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="w-full flex flex-row gap-x-3 mt-3">
      {categories.map((category: string) => {
        const key = category.toLowerCase() as keyof typeof IMAGES;
        return (
          <div className="relative h-7 w-7 rounded-lg overflow-hidden bg-white flex items-center justify-center">
            <Image
              src={IMAGES[key]}
              alt={category}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-center"
            />
          </div>
        );
      })}
    </div>
  );
}
