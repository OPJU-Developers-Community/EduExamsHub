import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addDays, format } from "date-fns";

import { createNewExamField } from "@/lib";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LoadingBtn from "@/components/LoadingBtn";
import { useToast } from "@/components/ui/use-toast";

// thunk and slices
import { createNewExam, resetState } from "@/redux/slices/examManager.slice";

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

  const examManagerState = useSelector((state) => state.examManager);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (examManagerState.status === "success") {
      toast({
        title: examManagerState.message,
        duration: 2000,
      });

      // reset the state so that
      // it allow user to navigate to this page again
      dispatch(resetState());

      router.push("/exams");
    }

    if (examManagerState.status === "failed") {
      toast({
        title: examManagerState.message,
        duration: 2000,
      });
    }
  }, [examManagerState.status]);

  const handleExamInputs = (e, key) => {
    setNewExam((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleCreateNewExam = () => {
    dispatch(
      createNewExam({ ...newExam, start_date: date.from, end_date: date.to })
    );
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
        {examManagerState.status === "loading" ? (
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
