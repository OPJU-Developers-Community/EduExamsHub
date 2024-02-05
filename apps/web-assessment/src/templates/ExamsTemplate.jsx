import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

const ExamsTemplate = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {}, [page]);

  return (
    <>
      {/* header */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Exams</h2>
        <Button
          className="capitalize bg-indigo-600 text-gray-50 font-medium hover:bg-indigo-700"
          asChild
        >
          <Link href="/exam-manager/new">create new exam</Link>
        </Button>
      </div>
      {/* list of exams */}
      <div></div>
    </>
  );
};

export default ExamsTemplate;
