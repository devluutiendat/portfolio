import About from "@/components/About";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 px-36 bg-white dark:bg-gray-900">
      <Header />
      <About />
    </div>
  );
}
