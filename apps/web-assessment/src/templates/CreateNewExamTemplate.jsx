import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { addDays, format } from "date-fns";

import { createNewExamField } from "@/lib";

import { useCreateNewExam } from "@/lib/react-query/queries";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LoadingBtn from "@/components/LoadingBtn";
import { useToast } from "@/components/ui/use-toast";

const CreateNewExamTemplate = () => {
  const { toast } = useToast();
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [newExam, setNewExam] = useState({
    course_code: "",
    course: "",
    semester: null,
    subject: "",
    max_marks: null,
    exam_rules: "",
  });

  const router = useRouter();

  const {
    mutate: createNewExam,
    isPending,
    isSuccess,
    isError,
    error,
    data: { data: result } = {},
  } = useCreateNewExam();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: result.message,
        description: `From ${format(date.from, "yyyy-MM-dd")} to ${format(date.to, "yyyy-MM-dd")}`,
        duration: 1000,
      });
      router.push("/exams");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast({
        title: error?.response.data.message,
        duration: 1000,
      });
    }
  }, [isError]);

  const handleExamInputs = (e, key) => {
    setNewExam((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleCreateNewExam = () => {
    createNewExam({
      ...newExam,
      start_date: format(date.from, "yyyy-MM-dd"),
      end_date: format(date.to, "yyyy-MM-dd"),
    });
  };

  return (
    <div>
      <DatePickerWithRange date={date} setDate={setDate} />
      <div className="mt-10">
        {createNewExamField.map((item, i) => (
          <div
            className="grid w-full max-w-[500px] items-center gap-1.5 my-5"
            key={`${item.label}-${i}`}
          >
            <Label htmlFor={item.key} className="capitalize">
              {item.label}
            </Label>
            <Input
              type={item.type ? item.type : "text"}
              id={item.key}
              className="py-5"
              placeholder={item.placeholder}
              onChange={(e) => handleExamInputs(e, item.key)}
            />
          </div>
        ))}
        <div className="grid w-full max-w-[500px] gap-1.5">
          <Label htmlFor="description">Exam Rules</Label>
          <Textarea
            placeholder="Type your message here."
            id="description"
            onChange={(e) => handleExamInputs(e, "exam_rules")}
          />
        </div>
        {isPending ? (
          <LoadingBtn classname="mt-5">Creating your exam</LoadingBtn>
        ) : (
          <Button
            className="w-fit capitalize bg-indigo-600 mt-5 text-gray-50 font-medium hover:bg-indigo-700"
            onClick={handleCreateNewExam}
          >
            create exam
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateNewExamTemplate;
