import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
}
