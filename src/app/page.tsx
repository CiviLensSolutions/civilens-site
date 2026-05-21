import { Nav } from "@/components/Nav";
import { CalEmbed } from "@/components/CalEmbed";
import { SectionRule } from "@/components/SectionRule";
import { AboutShea } from "@/components/AboutShea";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <CalEmbed />
      <SectionRule />
      <AboutShea />
      <SectionRule />
      <Capabilities />
      <SectionRule />
      <Footer />
    </>
  );
}
