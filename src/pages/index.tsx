import { UserCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Navbar from "~/components/Navbar";
import Section from "~/components/Section";

import { api } from "~/utils/api";

export default function Home() {
  const SEOTitle = "Virtual Assistant | Tiger";
  const SEODescription = "";

  return (
    <>
      <Head>
        <title>{SEOTitle}</title>
        <meta name="" content={SEODescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Navbar />
          {/* First Section */}
          <Section>
            <div className="flex flex-col items-center md:flex-row md:text-left">
              <div className="ml-16 w-full space-y-2 md:ml-0 md:flex-1 md:space-y-4">
                <div className="text-4xl font-bold text-white">Header</div>
                <p className="text-lg text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nibh ut dolor aliquet gravida.{" "}
                </p>
                <div className="flex flex-row items-center justify-start space-x-4">
                  <Button
                    text="Get Started"
                    link="get-started"
                    className="bg-blue-500"
                  />
                  <Button
                    text="Pricing"
                    link="pricing"
                    className="border-secondary border bg-transparent"
                  />
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:flex-1">
                {/* Placeholder Image */}
                <img
                  src="https://via.placeholder.com/400"
                  alt="Placeholder"
                  className="h-auto max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Section>

          {/* Card Section */}
          <Section>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
              <Card
                title="Feature"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh ut dolor aliquet gravida. "
                Icon={UserCircleIcon}
              />
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
