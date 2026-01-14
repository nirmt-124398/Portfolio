import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";

export default function Experience() {
  const experiences = [
    {
      title: "Internship — Digital Marketing & Systems",
      body: "Worked on practical digital systems involved in marketing automation. Gained exposure to real constraints and timelines.",
    },
    {
      title: "Department Student Coordinator — Training & Placement Cell (CSE)",
      body: "Led coordination between students, faculty, and companies. Handle systems and processes at scale, ensuring reliability.",
    },
    {
      title: "Product and engineering projects",
      body: "Built backend systems, auth, and internal tools. Focused on understanding where systems break and designing for stability.",
    },
  ];

  return (
    <Section className="py-24">
      <div className="max-w-2xl">
        <Heading level={2} className="mb-12">
          Experience
        </Heading>

        <div className="space-y-10">
          {experiences.map((role, index) => (
            <div key={index}>
              <Heading
                level={3}
                className="text-base font-medium mb-2 text-text-primary"
              >
                {role.title}
              </Heading>
              <Text variant="muted" className="text-sm">
                {role.body}
              </Text>
            </div>
          ))}
        </div>

        <Text variant="muted" className="mt-16 text-sm italic">
          Across these roles, I’ve learned to prioritize clarity, reliability,
          and long-term maintainability over quick wins.
        </Text>
      </div>
    </Section>
  );
}
