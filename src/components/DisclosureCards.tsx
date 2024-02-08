import React, { useState } from "react";
import { DisclosureCard } from "./Card";
import Section from "./Section";

const DisclosureCards = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleToggle = (cardTitle: string) => {
    setOpenCard(openCard === cardTitle ? null : cardTitle);
  };
  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DisclosureCard
          title="Disclosure Card 1"
          onToggle={() => handleToggle("Disclosure Card 1")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
        <DisclosureCard
          title="Disclosure Card 2"
          onToggle={() => handleToggle("Disclosure Card 2")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
        <DisclosureCard
          title="Disclosure Card 2"
          onToggle={() => handleToggle("Disclosure Card 2")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
        <DisclosureCard
          title="Disclosure Card 2"
          onToggle={() => handleToggle("Disclosure Card 2")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
        <DisclosureCard
          title="Disclosure Card 2"
          onToggle={() => handleToggle("Disclosure Card 2")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
        <DisclosureCard
          title="Disclosure Card 2"
          onToggle={() => handleToggle("Disclosure Card 2")}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </DisclosureCard>
      </div>
    </Section>
  );
};

export default DisclosureCards;
