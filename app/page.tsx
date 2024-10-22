/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import { Navbar } from "@/app/components/Navbar";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
