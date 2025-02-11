import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { itemsData, captainData, customerData } from "./data";

function Homepage() {
  return (
    <>
      <div className="h-screen md:h-[40rem] flex flex-col md:flex-row overflow-hidden items-center bg-gray-100 relative">
        <div className="flex flex-col items-center justify-center w-full md:w-[40rem] h-96 space-y-7 p-4 md:p-0">
          <h1 className="text-2xl md:text-3xl text-center">
            Bharat moves on Rapido!
          </h1>
          <p className="text-center px-4 md:px-10 text-sm md:text-base">
            Rapido, with Bike-Taxis, Autos & Cabs is revolutionising the way
            India travels. With a presence in 150+ cities and over 100 million
            safe rides completed, Rapido is becoming India&apos;s go-to app for
            comfortable and affordable rides.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="rounded-full text-black p-2 md:p-4 bg-gray-200 text-sm md:text-base">
              Download Rapido
            </button>
            <button className="rounded-full text-white font-bold bg-black p-2 md:p-4 text-sm md:text-base">
              Sign-up as Driver
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0 w-full md:w-auto">
          <div className="h-[15rem] md:h-[39rem] bg-yellow-300 rounded-lg md:rounded-l-full md:-rotate-45 w-full md:w-[50rem] md:translate-x-[10rem] md:-translate-y-[10rem] z-10"></div>

          <div className="h-[15rem] md:h-[50rem] w-full md:w-[50rem] absolute top-0 left-1/2 -translate-x-1/2 md:-translate-x-[23rem] -translate-y-0 md:-translate-y-[10rem] z-20">
            <Image
              src="/imagehome1.webp"
              alt="home img"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="h-[15rem] md:h-[40rem] flex items-center justify-center relative z-30">
        <Link href="/Safety">
          <div className="w-full md:w-[80rem] h-[15rem] md:h-[40rem] relative">
            <Image
              src="/safety-overview-header.png"
              alt="header page"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="Customer" className="w-full md:w-[70rem]">
          <TabsList className="grid w-full md:w-96 grid-cols-2 mx-auto h-12 md:h-16">
            <TabsTrigger
              value="Customer"
              className="outline-none data-[state=active]:bg-yellow-500 text-lg md:text-2xl h-10 md:h-12"
            >
              Customer
            </TabsTrigger>
            <TabsTrigger
              value="Captains"
              className="outline-none data-[state=active]:bg-yellow-500 text-lg md:text-2xl h-10 md:h-12"
            >
              Captains
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Customer">
            <Card>
              <CardContent className="space-y-2">
                <div className="container mx-auto px-4 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {itemsData.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
                          <Image
                            src={item.imagePath}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Captains">
            <Card>
              <CardContent className="space-y-2">
                <div className="container mx-auto px-4 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {captainData.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4">
                          <Image
                            src={item.imagePath}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="Customer" className="w-full md:w-[70rem]">
          <TabsList className="grid w-full md:w-96 grid-cols-2 mx-auto h-12 md:h-16">
            <TabsTrigger
              value="Customer"
              className="outline-none data-[state=active]:bg-yellow-500 text-lg md:text-2xl h-10 md:h-12"
            >
              Customer
            </TabsTrigger>
            <TabsTrigger
              value="Captains"
              className="outline-none data-[state=active]:bg-yellow-500 text-lg md:text-2xl h-10 md:h-12"
            >
              Captains
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Customer">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {customerData.map((customer) => (
                  <CarouselItem
                    key={customer.id}
                    className="basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 h-96">
                          <p className="text-base text-gray-600 text-center">
                            {customer.description}
                          </p>
                          <p className="text-xl font-semibold mt-4">
                            {customer.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {customer.post}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="Captains">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {customerData.map((customer) => (
                  <CarouselItem
                    key={customer.id}
                    className="basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 h-96">
                          <p className="text-base text-gray-600 text-center">
                            {customer.description}
                          </p>
                          <p className="text-xl font-semibold mt-4">
                            {customer.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {customer.post}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Homepage;
