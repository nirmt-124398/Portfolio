import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Design systems and UI that don't break.",
      body: "I design interfaces and component systems that stay consistent as products grow, so teams don't fight UI drift or rewrites later."
    },
    {
      title: "Backend systems that stay boring and reliable.",
      body: "I build backend and infrastructure with a focus on clarity, stability, and predictable behavior as traffic and complexity increase."
    },
    {
      title: "Automation that saves time and removes manual work.",
      body: "I help teams automate repetitive processes and build simple data workflows so they can move faster without adding operational overhead."
    },
    {
      title: "Systems that support growth, not just launches.",
      body: "I help founders think through scaling, handoffs, and operational systems so growth doesn't turn into fragility."
    }
  ];

  return (
    <Section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((card, index) => (
          <div 
            key={index} 
            className="rounded-lg bg-surface border border-border p-5 md:p-6 space-y-3"
          >
            <Heading level={2} className="text-lg font-medium mb-0 text-text-primary">
              {card.title}
            </Heading>
            <Text className="text-sm" variant="muted">
              {card.body}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
