import Hero from "@/src/sections/Hero";
import Capabilities from "@/src/sections/Capabilities";
import HowIWork from "@/src/sections/HowIWork";
import Experience from "@/src/sections/Experience";
import Contact from "@/src/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <HowIWork />
      <Experience />
      <Contact />
    </main>
  );
}
