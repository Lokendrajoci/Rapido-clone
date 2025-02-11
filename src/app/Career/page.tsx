import React from "react";
import Image from "next/image";
import { creeres } from "./data";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

function Page() {
  return (
    <>
      <div
        className={`${openSans.className}container mx-auto px-4 py-8 md:py-12 lg:py-16 text-center`}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Be a part of our team.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We are so glad you want to join us in exploring a world of endless
          opportunities at Rapido. Let's find a spot for you.
        </p>
        <button className="bg-yellow-400 rounded-full px-6 py-3 text-sm md:text-base font-semibold hover:bg-yellow-500 transition-colors">
          View Jobs
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
          Why work with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {creeres.map((career) => (
            <div
              key={career.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={career.image}
                  alt={career.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm md:text-base">{career.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <Carousel className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        <Image
                          src="/career_carousel_3.png"
                          alt="carousel image"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default Page;
