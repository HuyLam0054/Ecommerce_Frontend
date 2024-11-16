"use client";
import Exp_Card from "@/components/common/cards/exp.card";
import Image from "next/image";
import React from "react";

export default function About_Section() {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-gray-100 dark:bg-gray-600">
        <div className="container mx-auto py-5 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="maxWLg">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-200 text-sm lg:textLg text-justify">
                Welcome to our premium Apple store, your trusted destination for
                the latest and most authentic Apple products. We pride ourselves
                on delivering an exceptional shopping experience, offering a
                wide selection of genuine Apple devices and accessories,
                supported by a team of knowledgeable professionals ready to
                provide expert advice and assistance. With a commitment to
                quality, transparency, and customer satisfaction, we ensure
                every purchase meets the highest standards. Choose us for a
                seamless and reliable journey into the world of Apple
                technology, where innovation and trust go hand in hand.
              </p>
            </div>
            <div className="md:mt-0">
              <Image
                width={1000}
                height={1000}
                src="/img/about-img.jpg"
                alt="About Us Image"
                className="object-cover roundedLg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="py-12 lg:py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full maxW-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and
                      perseverance. Together, we&apos;ve overcome challenges,
                      celebrated victories, and created a narrative of progress
                      and success.
                    </p>
                  </div>
                </div>
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative sm:hidden">
                  <Image
                    width={1000}
                    height={1000}
                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                    src=""
                    alt="about Us image"
                  />
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <Exp_Card
                      number={33}
                      name="Year"
                      detail="Influencing Digital Landscapes Together"
                    />
                    <Exp_Card
                      number={125}
                      name="Projects"
                      detail="Excellence Achieved Through Success"
                    />
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <Exp_Card
                      number={26}
                      name="Awards"
                      detail="Our Dedication to Innovation Wins Understanding"
                    />
                    <Exp_Card
                      number={231}
                      name="Happy Clients"
                      detail="Mirrors our Focus on Client Satisfaction."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start hidden md:flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <Image
                  width={1000}
                  height={1000}
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src=""
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
