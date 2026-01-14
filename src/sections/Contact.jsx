import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Section className="py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Left Column: Context */}
        <div className="max-w-sm">
          <Heading level={2} className="mb-6">
            Let&apos;s talk
          </Heading>
          
          <Text className="text-lg" variant="muted">
            If you&apos;re building something and want help thinking through execution, 
            systems, or reliability, feel free to reach out.
          </Text>
          
          <Text className="mb-2" variant="muted">
            Early-stage or growing teams.
          </Text>
          
          <div className="mt-8">
             <Text className="text-sm italic" variant="muted">
              I read every message and usually reply within a day.
            </Text>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
           <Heading level={3} className="text-lg font-medium mb-4 text-text-primary">
            Send me a note
          </Heading>
          <ContactForm />
        </div>

      </div>
    </Section>
  );
}
