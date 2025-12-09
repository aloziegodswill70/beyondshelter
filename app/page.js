// File: app/page.js
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowWeHelpSection from "../components/HowWeHelp";
import ImpactSection from "../components/ImpactSection";
import StoriesOfHope from "../components/StoriesOfHope";
import SupportOurMission from "../components/SupportOurMission";
import UrgentHelp from "../components/UrgentHelp";
import BottomNav from "../components/BottomNav";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white">

      <Hero />

      <AboutSection />

      <HowWeHelpSection />

      <ImpactSection />

      <StoriesOfHope />

      <SupportOurMission />

      <UrgentHelp />

      <BottomNav />

    </main>
  );
}
