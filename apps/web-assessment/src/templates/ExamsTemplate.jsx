import { useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

// components
import { Button } from "@/components/ui/button";
import ExamList from "@/components/ExamList";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllExams } from "@/redux/slices/exams.slice";
import { useSelector } from "react-redux";

const ExamsTemplate = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.exams);

  useEffect(() => {
    dispatch(getAllExams({ page: 1, limit: 10 }));
  }, []);

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

      {!data && status === "loading" ? (
        <div className="flex flex-col items-start gap-4 mb-5 mt-10">
          {[...new Array(5)].map((_, i) => (
            <div className="flex items-start w-full" key={i}>
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2 flex-1 ml-3">
                <Skeleton className="h-6" />
                <Skeleton className="h-6" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ExamList />
      )}
    </>
  );
};

export default ExamsTemplate;
