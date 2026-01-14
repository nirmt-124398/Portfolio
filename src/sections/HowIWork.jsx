import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";

export default function HowIWork() {
  const steps = [
    {
      title: "Start with clarity.",
      body: "I spend time understanding what you're building and who it's for avoiding the wrong build."
    },
    {
      title: "Design before implementation.",
      body: "I think through structure, data flow, and long-term constraints early, avoiding constant rewrites."
    },
    {
      title: "Build, then stabilize.",
      body: "I build iteratively, but spend time making things stable and predictable before moving on."
    },
    {
      title: "Improve based on real usage.",
      body: "I improve systems based on real usage patterns, not where it looks impressive."
    }
  ];

  return (
    <Section className="py-32"> {/* More breathing room as requested */}
      <div className="max-w-2xl">
        <Heading level={2} className="mb-2">
          How I work
        </Heading>
        
        <Text variant="muted" className="mb-16 text-lg">
          I focus on understanding the problem clearly before writing code.
        </Text>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <Heading level={3} className="text-lg font-medium mb-2 text-text-primary">
                {step.title}
              </Heading>
              <Text variant="muted" className="text-sm max-w-xl">
                {step.body}
              </Text>
            </div>
          ))}
        </div>

        <Text variant="muted" className="mt-16 italic">
          The goal is software that stays easy to work with as the product grows.
        </Text>
      </div>
    </Section>
  );
}
