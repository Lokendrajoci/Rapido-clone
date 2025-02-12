import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";

export default function ContactFormCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 p-4 md:p-8 ">
      <Card className="w-full lg:max-w-[50rem] flex-1 shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">
            You can find us here
          </CardTitle>
          <CardDescription className="text-lg md:text-xl">
            Find help for your queries here:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid w-full gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Name <span className="text-yellow-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your name"
                  type="text"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-yellow-500">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Mobile Number <span className="text-yellow-500">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">
                  Role <span className="text-yellow-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="captain">Captain</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Comment <span className="text-yellow-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here."
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-yellow-500 text-black hover:bg-yellow-400 text-lg"
          >
            Submit
          </Button>
        </CardFooter>
      </Card>

      <div className="w-full lg:max-w-[30rem] flex flex-col gap-6 p-4 md:p-6 bg-gray-50 rounded-lg">
        <div className="relative w-full aspect-square max-w-[400px] mx-auto">
          <Image
            src="/cimage.png"
            alt="contact logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Registered Office Address:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi
              Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad -
              500081. CIN:U52210TG2015PTC097115
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold">City Office:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Roppen Transportation Services Pvt Ltd, #148, 1st Floor, SLV
              Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore
              560102.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold">Corporate Office:</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of
              Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara
              Village Varthur Hobli, Bangalore East Taluk, Bangalore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
