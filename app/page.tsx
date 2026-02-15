import NavigationGlass from "@/components/NavigationGlass";
import HeroGlass from "@/components/HeroGlass";
import HorizontalProjectsScroll from "@/components/HorizontalProjectsScroll";
import SkillsGlass from "@/components/SkillsGlass";
import FooterGlass from "@/components/FooterGlass";
import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <AuroraBackground />
      <div className="relative z-10">
        <NavigationGlass />
        <HeroGlass />
        <HorizontalProjectsScroll />
        <SkillsGlass />
        <FooterGlass />
      </div>
    </main>
  );
}
