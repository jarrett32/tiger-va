import Image from "next/image";
import React from "react";
import Section from "./Section";

const LogoBanner = () => {
  return (
    <Section>
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Our Trusted Partners
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Logo 1 */}
          <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
            <Image
              src="https://via.placeholder.com/100x50"
              alt="Partner Logo 1"
              width={100}
              height={50}
              className="max-h-full"
            />
          </div>
          {/* Logo 2 */}
          <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
            <Image
              src="https://via.placeholder.com/100x50"
              alt="Partner Logo 2"
              width={100}
              height={50}
              className="max-h-full"
            />
          </div>
          {/* Logo 3 */}
          <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
            <Image
              src="https://via.placeholder.com/100x50"
              alt="Partner Logo 3"
              width={100}
              height={50}
              className="max-h-full"
            />
          </div>
          {/* Logo 4 */}
          <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
            <Image
              src="https://via.placeholder.com/100x50"
              alt="Partner Logo 4"
              width={100}
              height={50}
              className="max-h-full"
            />
          </div>
          {/* Logo 5 */}
          <div className="flex h-32 w-32 items-center justify-center bg-gray-100">
            <Image
              src="https://via.placeholder.com/100x50"
              alt="Partner Logo 5"
              width={100}
              height={50}
              className="max-h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LogoBanner;
