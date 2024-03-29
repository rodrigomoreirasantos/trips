import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Try find for
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
            <p className="text-sm lg:text-base text-grayPrimary">Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=farm"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/farm-icon.png" alt="Farm" />
            <p className="text-sm lg:text-base text-grayPrimary">Farm</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=cottage"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={35}
              height={35}
              src="/cottage-icon.png"
              alt="Cottage"
            />
            <p className="text-sm lg:text-base text-grayPrimary">Cottage</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href="/trips/search?text=inn"
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={35} height={35} src="/inn-icon.png" alt="Inn" />
            <p className="text-sm lg:text-base text-grayPrimary">Inn</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
