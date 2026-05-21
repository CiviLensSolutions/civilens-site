import { Nav } from "@/components/Nav";
import { CalEmbed } from "@/components/CalEmbed";
import { SectionRule } from "@/components/SectionRule";
import { AboutShea } from "@/components/AboutShea";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <h1 className="sr-only">CiviLens — Civic Intelligence for Government &amp; Nonprofits</h1>
        <CalEmbed />
        <SectionRule />
        <AboutShea />
        <SectionRule />
        <Capabilities />
        <Footer />
      </main>
    </>
  );
}
