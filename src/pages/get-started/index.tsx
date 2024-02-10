import { motion } from "framer-motion";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const GetStarted = () => {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-primary to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-4xl flex-col overflow-hidden rounded-lg border-2 border-border bg-card shadow-xl md:flex-row"
        >
          {/* Image and Text Section */}
          <div className="flex flex-col justify-center p-8 text-foreground md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Personal Assistant"
              className="mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold">
              Enhance Your Daily Productivity
            </h2>
            <p className="mt-2 text-secondary-foreground">
              Discover how our personal assistant service can transform your
              day-to-day tasks, allowing you to focus on what truly matters.
            </p>
          </div>

          {/* Sign Up Form Section */}
          <div className="flex flex-col justify-center bg-background p-8 md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Sign Up Today
            </h3>
            <form
              action="/signup"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="rounded border border-border px-4 py-2 focus:ring focus:ring-ring"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded border border-border px-4 py-2 focus:ring focus:ring-ring"
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded border border-border px-4 py-2 focus:ring focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2 text-primary-foreground shadow transition-colors hover:bg-accent"
              >
                Get Started
              </button>
            </form>
            <div className="italices p-2 text-xs text-secondary">
              Powered by Stripe
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default GetStarted;
