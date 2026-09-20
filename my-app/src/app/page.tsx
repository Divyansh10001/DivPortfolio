import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* The Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects Grid below the scroll animation */}
      <Projects />
    </main>
  );
}
