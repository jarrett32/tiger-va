import Head from "next/head";
import Link from "next/link";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
