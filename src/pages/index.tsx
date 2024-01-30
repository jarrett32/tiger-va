import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

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
        </div>
      </main>
    </>
  );
}
