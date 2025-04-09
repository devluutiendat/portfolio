import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="relative">
      <div className="space-y-16 z-20 flex min-h-screen flex-col items-center justify-between p-24 px-8 lg:px-36 bg-white dark:bg-gray-900">
        <Header />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
