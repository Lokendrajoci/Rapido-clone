import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CardImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CardImage = ({ src, alt, width = 500, height = 300 }: CardImageProps) => {
  return (
    <Card className="w-full sm:w-[40rem] md:w-[50rem] lg:w-[60rem]  border-0 shadow-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      <CardContent>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </CardContent>
    </Card>
  );
};

export default function Home() {
  const images: CardImageProps[] = [
    { src: "/customer-safety.png", alt: "Customer Safety" },
    { src: "/captain-verification.png", alt: "Captain Verification" },
    {
      src: "/safety-features-customer.png",
      alt: "Safety Features for Customers",
    },
    {
      src: "/safety_way_forward_overview.png",
      alt: "Safety Way Forward Overview",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-4 space-y-8">
      {images.map((image, index) => (
        <CardImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
