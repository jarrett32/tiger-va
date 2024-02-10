import { motion } from "framer-motion";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const GetStarted = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 text-center md:p-8"
        >
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Get Started with Your Personal Assistant
          </h1>
          <p className="mb-8 text-secondary-foreground">
            Ready to take your productivity to the next level? Let us match you
            with the perfect personal assistant to meet your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/signup"
              className="rounded-full bg-primary px-6 py-2 text-primary-foreground shadow transition-colors hover:bg-accent"
            >
              Sign Up Now
            </a>
            <a
              href="/contact"
              className="rounded-full border-2 border-primary bg-transparent px-6 py-2 text-primary shadow transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default GetStarted;
