import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MetaLogo() {
  return (
    <div>
      <div className="flex justify-center p-5 bg-loil-light w-full min-h-15"></div>
      <div className="flex pl-20 py-10 top-0 z-10">
        <Image src="/Loil-logo.jpeg" alt="Loil logo" width={200} height={100} />
      </div>

      <div className="flex flex-row items-center">
        <div className="basis-8/12">
          <h1 className="pl-20 text-loil-light italic text-xl font-medium">
            Helping you obtain, retain and engage a loyal patient following
          </h1>
        </div>

        <div className="basis-4/12">
          <div className="mr-20 prose prose xl mx-auto flex justify-between flex-col sm:flex-row text-black/70 font-sans text-xl font-medium">
            <Link href="/" className="no-underline hover:text-black/90">
              Our Team
            </Link>
            <Link href="/" className="no-underline hover:text-black/90">
              Our Services
            </Link>
            <Link href="/" className="no-underline hover:text-black/90">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
