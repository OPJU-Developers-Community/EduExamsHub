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
      <SideNav isNavShow={isNavShow} setIsNavShow={setIsNavShow} />
      <section className="h-full w-full">
        <div className="h-[50px] w-full flex items-center px-2 bg-gray-50 border-b border-gray-300">
          <Button
            variant="ghost"
            className="px-2 bg-transparent focus:bg-gray-100 rounded-full md:hidden"
            onClick={() => setIsNavShow((prev) => !prev)}
          >
            <HamburgerMenuIcon className="text-gray-600 h-5 w-5" />
          </Button>
        </div>
        <div className="pt-10 px-4 md:px-10">{children}</div>
      </section>
    </main>
  );
}
