"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

const ExamsTemplate = () => {
  const pathname = usePathname();

  return (
    <>
      {/* header */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Exams</h2>
        <Button
          className="capitalize bg-indigo-600 text-gray-50 font-medium hover:bg-indigo-700"
          asChild
        >
          <Link href={`${pathname}/create-exam`}>create new exam</Link>
        </Button>
      </div>
      {/* list of exams */}
      <div></div>
    </>
  );
};

export default ExamsTemplate;
