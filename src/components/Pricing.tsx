import React from "react";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section>
      <div id="pricing" className="">
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
  );
};

export default Pricing;
