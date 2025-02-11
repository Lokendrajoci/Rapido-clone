import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function ContactCard() {
  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="w-full shadow-none outline-none">
        <CardContent className="p-4">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src="/customer-safety.png"
              alt="Safety Overview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full shadow-none outline-none">
        <CardContent className="p-4">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src="/captain-verification.png"
              alt="Safety Overview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </CardContent>
      </Card>

      <div className="w-full">
        <div className="aspect-[4/3] relative w-full max-w-4xl mx-auto  h-[80rem]">
          <Image
            src="/safety-features-customer.png"
            alt="Safety Features for Customers"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="aspect-[16/9] relative w-full">
          <Image
            src="/safety_way_forward_overview.png"
            alt="Safety Way Forward Overview"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
