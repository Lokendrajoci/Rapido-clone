import Image from "next/image"; 
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <div
        className={`${openSans.className}container mx-auto px-4 py-8 md:py-12 lg:py-16`}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            India&apos;s Beloved Bike Taxi Service
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
            We are not an option, we are a choice
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;re #1 choice of 10 Million people because we&apos;re the solution of
            India&apos;s intra-city commuting problems. With assured safety, we also
            provide economically priced rides.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What makes us different?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Our bike taxis can dodge the traffic during peak hours and get you
            to the destination in a jiffy! So when you think travel, think
            Rapido.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Champions of our success story
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Rapido has come a long way ever since its inception in 2015. With a
            lot of hard work and perseverance, we have made a place for
            ourselves in the market. As a brand and as a service, it is our
            constant endeavour to redefine ourselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/aravind.png"
                alt="Arvind Sanka"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Arvind Sanka</h1>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/pavan.png"
                alt="Pavan"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Pavan</h1>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/rishi.png"
                alt="Rishi"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Rishi</h1>
          </div>
        </div>
      </div>
    </>
  );
}
