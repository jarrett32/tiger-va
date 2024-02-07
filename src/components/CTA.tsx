import React from "react";
import Section from "./Section";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <Section>
      <div className="text-center">
        <h2 className="mb-6 text-3xl font-bold text-foreground">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-secondary-foreground">
          Join us today and revolutionize your workflow with our innovative
          solutions.
        </p>
        <Button>Sign Up Now</Button>
      </div>
    </Section>
  );
};

export default CTA;
