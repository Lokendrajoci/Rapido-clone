"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Customer app</h3>
            <div className="space-y-4">
              <Link href="#" className="block w-40">
                <Image
                  src="/playstore.jpg"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="object-contain"
                />
              </Link>
              <Link href="#" className="block w-40">
                <Image
                  src="/appstore.png"
                  alt="Download on App Store"
                  width={160}
                  height={48}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Captain app</h3>
            <Link href="#" className="block w-40">
              <Image
                src="/playstore.jpg"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/safety"
              className="block hover:text-gray-300 transition-colors"
            >
              Safety
            </Link>
            <Link
              href="/careers"
              className="block hover:text-gray-300 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/privacy-policy"
              className="block hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Customer</h3>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Terms - Bike Taxi
            </Link>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Customer Terms - Cabs and Auto
            </Link>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Corporate Affairs
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Captain</h3>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Terms - Bike Taxi
            </Link>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Terms - Cabs and Auto
            </Link>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block hover:text-gray-300 transition-colors"
            >
              Press
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Roppen Transportation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <h3 className="text-lg font-semibold mr-4">Follow Us</h3>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
