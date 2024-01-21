"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { sideNavLinks, sideNavLinksLearn } from "@/lib";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconBuddyProfileIcon } from "./icon";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "pb-12, h-full max-w-[240px] bg-gray-50 border-r border-gray-300 hidden md:inline-block"
      )}
    >
      <div className="space-y-4 px-3 py-6 h-[90vh] flex flex-col justify-between">
        <div>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            E-Learning Hub
          </h2>
          <div className="space-y-2 mt-5">
            {sideNavLinks.map((item, i) => {
              const { label, icon, source } = item;
              return (
                <Link href={source} key={`${label}-${i}`}>
                  <Button
                    variant={pathname === source ? "default" : "ghost"}
                    className="w-full flex items-center justify-start my-1"
                  >
                    {icon}
                    <span className="capitalize">{label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="space-y-2 mt-5 border-t pt-2">
            {sideNavLinksLearn.map((item, i) => {
              const { label, icon, source } = item;
              return (
                <Link href={source} key={`${label}-${i}`}>
                  <Button
                    variant={pathname === source ? "secondary" : "ghost"}
                    className="w-full justify-start my-1"
                  >
                    {icon}
                    <span className="capitalize">{label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <div>
            <Button variant="ghost" className="w-full justify-start">
              <IconBuddyProfileIcon classname="w-5 h-5 mr-2" />
              My Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
