import About from "@/components/about";
import Header from "@/components/header";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="relative z-20 flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-900">
      <Header />
      <main className="w-full space-y-16 p-8 md:p-16">
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
