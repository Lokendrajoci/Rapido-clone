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
    <div className="min-h-screen w-full overflow-x-hidden">
      <section className="min-h-screen sm:min-h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center bg-gray-100 relative px-4 py-8 sm:py-12 lg:py-0">
        <div className="flex flex-col items-center justify-center w-full lg:w-[40rem] space-y-4 sm:space-y-7 z-20">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold">
            Bharat moves on Rapido!
          </h1>
          <p className="text-center px-4 sm:px-8 lg:px-12 text-sm sm:text-base lg:text-lg max-w-2xl">
            Rapido, with Bike-Taxis, Autos & Cabs is revolutionising the way
            India travels. With a presence in 150+ cities and over 100 million
            safe rides completed, Rapido is becoming India&apos;s go-to app for
            comfortable and affordable rides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <button className="rounded-full text-black py-3 px-6 bg-gray-200 text-sm sm:text-base hover:bg-gray-300 transition-colors">
              Download Rapido
            </button>
            <button className="rounded-full text-white font-bold bg-black py-3 px-6 text-sm sm:text-base hover:bg-gray-800 transition-colors">
              Sign-up as Driver
            </button>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="h-48 sm:h-64 lg:h-[39rem] bg-yellow-300 rounded-lg lg:rounded-l-full lg:-rotate-45 w-full lg:translate-x-20 lg:-translate-y-40 z-10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 sm:h-64 lg:h-[50rem] lg:-translate-y-40 z-20">
            <Image
              src="/imagehome1.webp"
              alt="home img"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="h-48 sm:h-64 lg:h-[40rem] w-full flex items-center justify-center">
        <Link href="/Safety" className="w-full max-w-7xl px-4">
          <div className="w-full h-48 sm:h-64 lg:h-[40rem] relative">
            <Image
              src="/safety-overview-header.png"
              alt="header page"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <Tabs defaultValue="Customer" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full sm:w-96 grid-cols-2 mx-auto h-12 sm:h-16 mb-8">
            {["Customer", "Captains"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="outline-none data-[state=active]:bg-yellow-500 text-base sm:text-xl lg:text-2xl h-full transition-colors"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {["Customer", "Captains"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {(tab === "Customer" ? itemsData : captainData).map(
                      (item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center text-center group"
                        >
                          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4 transition-transform group-hover:scale-105">
                            <Image
                              src={item.imagePath}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                            {item.title}
                          </h2>
                          <p className="text-sm sm:text-base text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="px-4 py-12 sm:py-16 bg-gray-50">
        <Tabs defaultValue="Customer" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full sm:w-96 grid-cols-2 mx-auto h-12 sm:h-16 mb-8">
            {["Customer", "Captains"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="outline-none data-[state=active]:bg-yellow-500 text-base sm:text-xl lg:text-2xl h-full transition-colors"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {["Customer", "Captains"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {customerData.map((customer) => (
                    <CarouselItem
                      key={customer.id}
                      className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2"
                    >
                      <Card className="h-full">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-80 sm:h-96">
                          <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
                            {customer.description}
                          </p>
                          <p className="text-lg sm:text-xl font-semibold">
                            {customer.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {customer.post}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </div>
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
}

export default Homepage;
