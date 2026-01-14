import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Button from "../components/Button";
import personalDetails from "../lib/personalDetails";

export default function Hero() {
  return (
    <Section className="pt-32 pb-48 md:py-32">
      <div className="max-w-2xl">
        <Text className="mb-4 font-medium" variant="muted">
          Hi, I&apos;m Nirmit.
        </Text>

        <Heading level={1} className="mb-6">
          I help startups build software that keeps working as they grow.
        </Heading>

        <Text className="mb-8 text-lg" variant="muted">
          From early MVPs to growing products, I focus on clean systems, stable
          backend, and long-term maintainability.
        </Text>

        <div className="flex flex-col items-start gap-4">
          <Button href={`mailto:${personalDetails.contact.email}`}>Get in touch</Button>

          <Text className="text-sm" variant="muted">
            If you&apos;re building something and want a second brain on
            execution.
          </Text>
          <Text className="text-sm" variant="muted">
            Early-stage or growing teams.
          </Text>
        </div>
      </div>
    </Section>
  );
}
