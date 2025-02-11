import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function ContactCard() {
  return (
    <div className="container mx-auto px-4 space-y-8 md:space-y-12 lg:space-y-16">
      {/* Safety Overview Card */}
      <Card className="w-full border-none shadow-none">
        <CardContent className="p-2 sm:p-4">
          <div className="relative w-full h-48 sm:h-64 md:h-96">
            <Image
              src="/safovherad.png"
              alt="Safety Overview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1200px"
            />
          </div>
        </CardContent>
      </Card>

      {/* Coverage Card */}
      <Card className="w-full border-none shadow-none">
        <CardHeader className="text-center sm:text-left p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Covers Everyone
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src="/cover-customer.png"
                alt="Cover for Customers"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       600px"
              />
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src="/cover-captain.png"
                alt="Cover for Captains"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       600px"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features Section */}
      <div className="w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] max-w-4xl mx-auto">
          <Image
            src="/safety-features-customer.png"
            alt="Safety Features for Customers"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 90vw,
                   1000px"
          />
        </div>
      </div>

      {/* Safety Way Forward Section */}
      <div className="w-full">
        <div className="relative w-full h-48 sm:h-64 md:h-96">
          <Image
            src="/safety_way_forward_overview.png"
            alt="Safety Way Forward Overview"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 90vw,
                   1200px"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;