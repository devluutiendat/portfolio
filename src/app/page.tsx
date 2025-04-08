import About from "@/components/About";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Project from "@/components/project";
import SetUser from "@/components/SetUser";

export default function Home() {
  return (
    <div className="relative">
      <div className="space-y-16 z-20 flex min-h-screen flex-col items-center justify-between p-24 px-8 lg:px-36 bg-white dark:bg-gray-900">
        {/* <Header />
        <About />
        <Project />
        <Contact /> */}
        <SetUser />
      </div>
    </div>
  );
}
