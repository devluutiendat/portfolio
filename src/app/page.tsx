import About from "@/components/about";
import Header from "@/components/header";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-16 z-20 flex min-h-screen flex-col items-center justify-between p-24 px-8 lg:px-36 bg-white dark:bg-gray-900">
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
