import { useRouter } from "next/router";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { sideNavLinks, sideNavLinksLearn } from "@/lib";

import { Cross2Icon } from "@radix-ui/react-icons";
import { IconBuddyProfileIcon } from "./icon";

import { Button } from "@/components/ui/button";

const SideNav = (props) => {
  const { isNavShow = "", setIsNavShow = () => {} } = props;
  const router = useRouter();

  return (
    <div
      className={cn(
        "pb-12 h-full max-w-[280px] bg-gray-50 border-r border-gray-300 md:inline-block",
        `${isNavShow ? "absolute top-0 left-0 w-[70vw]" : "hidden"}`
      )}
    >
      <div className="space-y-4 px-3 py-6 h-[90vh] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2 pl-2">
            <h2 className="text-lg font-semibold tracking-tight">
              E-Learning Hub
            </h2>
            <Button
              variant="ghost"
              className="px-2 bg-transparent focus:bg-gray-100 rounded-full md:hidden"
              onClick={() => setIsNavShow((prev) => !prev)}
            >
              <Cross2Icon className="text-gray-600 w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-2 mt-5">
            {sideNavLinks.map((item, i) => {
              const { label, icon, source } = item;
              return (
                <Button
                  key={`${label}-${i}`}
                  variant={router.pathname === source ? "default" : "ghost"}
                  className="w-full flex items-center justify-start my-1"
                  asChild
                >
                  <Link href={source}>
                    {icon}
                    <span className="capitalize">{label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          <div className="space-y-2 mt-5 border-t pt-2">
            {sideNavLinksLearn.map((item, i) => {
              const { label, icon, source } = item;
              return (
                <Button
                  key={`${label}-${i}`}
                  variant={router.pathname === source ? "secondary" : "ghost"}
                  className="w-full justify-start my-1"
                  asChild
                >
                  <Link href={source} className="flex items-center">
                    {icon}
                    <span className="capitalize">{label}</span>
                  </Link>
                </Button>
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
