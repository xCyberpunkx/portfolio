import Hero from "./components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { Timeline } from "./components/ui/Timeline"; // You may not need this import anymore
import { TimelineDemo } from "./components/TimelineDemo"; // Import the TimelineDemo component

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />   
        <Hero />
        {/* Add the TimelineDemo component here */}
        <TimelineDemo  />
      </div>
    </main>
  );
}

