import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const ExamList = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useSelector((state) => state.exams);

  useEffect(() => {}, [page]);

  return (
    <div className="flex flex-col gap-4 mb-5 mt-10">
      {data &&
        data.map((item, _) => (
          <Link
            href={`/exam-manager/${item._id}/manage`}
            key={item._id}
            className="group/card"
          >
            <Card className="relative shadow-sm hover:shadow-inner">
              <CardHeader>
                <CardTitle>Exam title</CardTitle>
                <CardDescription>Exam time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
              <div className="w-full h-full bg-gray-200/70 hidden group-hover/card:block absolute top-0 left-0 rounded-sm">
                <div className="flex h-full justify-center items-center">
                  <Button className="bg-indigo-600 text-gray-50 font-medium hover:bg-indigo-700">
                    Resume building your exam
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}

      {data && status === "loading" && (
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
      )}
    </div>
  );
};

export default ExamList;
