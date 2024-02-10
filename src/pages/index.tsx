import { UserCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Image from "next/image";
import CTA from "~/components/CTA";
import Card from "~/components/Card";
import DisclosureCards from "~/components/DisclosureCards";
import Duplex from "~/components/Duplex";
import Footer from "~/components/Footer";
import LogoBanner from "~/components/LogoBanner";
import Navbar from "~/components/Navbar";
import Pricing from "~/components/Pricing";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";

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
      <main className="min-h-screen flex-col bg-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* First Section */}
          <Section>
            <div className="flex flex-col items-center md:flex-row md:text-left">
              <div className="ml-16 w-full space-y-2 md:ml-0 md:flex-1 md:space-y-4">
                <div className="text-4xl font-bold text-foreground">Header</div>
                <p className="text-lg text-secondary-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nibh ut dolor aliquet gravida.{" "}
                </p>
                <div className="flex flex-row items-center justify-start space-x-4">
                  <Button>Get Started</Button>
                  <Button variant={"outline"}>Pricing</Button>
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:flex-1">
                {/* Placeholder Image */}
                <Image
                  src="https://via.placeholder.com/400"
                  alt="Placeholder"
                  width={400}
                  height={400}
                  className="h-auto max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Section>

          <LogoBanner />

          {/* Card Section */}
          <Section>
            <div
              id="features"
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
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
          <CTA />
          <div id="solutions">
            <DisclosureCards />
          </div>
          <Duplex />
          <Section>
            <div className="bg-light-100">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  What Our Customers Say
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <div className="rounded-lg bg-white p-4 shadow">
                    <p className="text-secondary-foreground">
                      &quot;This product has changed the way we do business.
                      Highly recommend!&quot;
                    </p>
                    <footer className="mt-2 font-semibold text-foreground">
                      - Alex Smith
                    </footer>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow">
                    <p className="text-secondary-foreground">
                      &quot;A must-have tool for anyone looking to improve their
                      workflow!&quot;
                    </p>
                    <footer className="mt-2 font-semibold text-foreground">
                      - Jamie Doe
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Pricing />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
