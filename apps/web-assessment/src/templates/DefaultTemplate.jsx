import { Inter } from "next/font/google";
import { useState } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export default function DefaultTemplate({ children }) {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <main className={`h-screen flex ${inter.className}`}>
      <SideNav />
      <section className="h-full w-full pt-6 px-5">
        <Button
          variant="ghost"
          className="px-2 bg-transparent focus:bg-gray-100 rounded-full md:hidden"
        >
          <HamburgerMenuIcon className="text-gray-600 h-5 w-5" />
        </Button>
        <div className="pt-5 px-2 md:px-10">{children}</div>
      </section>
    </main>
  );
}
