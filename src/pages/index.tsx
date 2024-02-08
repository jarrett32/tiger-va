import { UserCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import { useState } from "react";
import CTA from "~/components/CTA";
import Card, { DisclosureCard } from "~/components/Card";
import Duplex from "~/components/Duplex";
import Footer from "~/components/Footer";
import LogoBanner from "~/components/LogoBanner";
import Navbar from "~/components/Navbar";
import Section from "~/components/Section";
import { Button } from "~/components/ui/button";

export default function Home() {
  const SEOTitle = "Virtual Assistant | Tiger";
  const SEODescription = "";
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleToggle = (cardTitle: string) => {
    setOpenCard(openCard === cardTitle ? null : cardTitle);
  };

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
                <img
                  src="https://via.placeholder.com/400"
                  alt="Placeholder"
                  className="h-auto max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Section>

          <LogoBanner />

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
          <Section>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <DisclosureCard
                title="Disclosure Card 1"
                onToggle={() => handleToggle("Disclosure Card 1")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
              <DisclosureCard
                title="Disclosure Card 2"
                onToggle={() => handleToggle("Disclosure Card 2")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
              <DisclosureCard
                title="Disclosure Card 2"
                onToggle={() => handleToggle("Disclosure Card 2")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
              <DisclosureCard
                title="Disclosure Card 2"
                onToggle={() => handleToggle("Disclosure Card 2")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
              <DisclosureCard
                title="Disclosure Card 2"
                onToggle={() => handleToggle("Disclosure Card 2")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
              <DisclosureCard
                title="Disclosure Card 2"
                onToggle={() => handleToggle("Disclosure Card 2")}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </DisclosureCard>
            </div>
          </Section>
          <CTA />
          <Duplex />
          <Section>
            <div className="bg-light-100">
              <div className="text-center">
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  What Our Customers Say
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <blockquote className="rounded-lg bg-white p-4 shadow">
                    <p className="text-secondary-foreground">
                      "This product has changed the way we do business. Highly
                      recommend!"
                    </p>
                    <footer className="mt-2 font-semibold text-foreground">
                      - Alex Smith
                    </footer>
                  </blockquote>
                  <blockquote className="rounded-lg bg-white p-4 shadow">
                    <p className="text-secondary-foreground">
                      "A must-have tool for anyone looking to improve their
                      workflow!"
                    </p>
                    <footer className="mt-2 font-semibold text-foreground">
                      - Jamie Doe
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <div className="">
              <div className="py-12 text-center">
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Pricing Plans
                </h2>
                <p className="text-secondary-foreground">
                  Choose the plan that's right for you.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                  {/* Basic Plan */}
                  <div className="w-full max-w-xs rounded-lg bg-card p-4 shadow-md">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                      Basic
                    </h3>
                    <p className="text-lg font-bold text-primary">$19/month</p>
                    <ul className="my-4 text-secondary-foreground">
                      <li>✔ 10 Projects</li>
                      <li>✔ 5 GB Storage</li>
                      <li>✔ Basic Support</li>
                    </ul>
                    <button className="w-full rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-accent">
                      Choose Plan
                    </button>
                  </div>

                  {/* Featured Plan */}
                  <div className="w-full max-w-xs scale-105 transform rounded-lg border-4 border-accent bg-card p-6 shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                      Pro{" "}
                      <span className="rounded-full bg-accent px-2 py-1 text-sm text-accent-foreground">
                        Best Value
                      </span>
                    </h3>
                    <p className="text-lg font-bold text-primary">
                      <s className="text-destructive">$49</s> $39/month
                    </p>
                    <ul className="my-4 text-secondary-foreground">
                      <li>✔ Unlimited Projects</li>
                      <li>✔ 100 GB Storage</li>
                      <li>✔ Priority Support</li>
                      <li>✔ Advanced Analytics</li>
                    </ul>
                    <button className="w-full rounded bg-accent px-4 py-2 text-accent-foreground hover:bg-primary">
                      Choose Plan
                    </button>
                  </div>

                  {/* Advanced Plan */}
                  <div className="w-full max-w-xs rounded-lg bg-card p-4 shadow-md">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                      Advanced
                    </h3>
                    <p className="text-lg font-bold text-primary">$99/month</p>
                    <ul className="my-4 text-secondary-foreground">
                      <li>✔ Unlimited Projects</li>
                      <li>✔ 1 TB Storage</li>
                      <li>✔ 24/7 Support</li>
                      <li>✔ Dedicated Manager</li>
                    </ul>
                    <button className="w-full rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-accent">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
