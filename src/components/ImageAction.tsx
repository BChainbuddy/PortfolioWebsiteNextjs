import Image from "next/image";

export default function ImageAction({
  src,
  alt,
  href,
  special,
  animation,
}: {
  src: string;
  alt: string;
  href: string;
  special?: string;
  animation: string;
}) {
  return (
    <>
      <div className={`flex flex-row items-center space-x-4 ${animation}`}>
        <a href={href}>
          <div
            className={`md:w-12 md:h-12 sm:h-12 sm:w-12 relative ${special} hover:opacity-50 transition-all duration-300 ease-out`}
          >
            <Image
              src={src}
              fill
              alt={alt}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </a>
      </div>
    </>
  );
}