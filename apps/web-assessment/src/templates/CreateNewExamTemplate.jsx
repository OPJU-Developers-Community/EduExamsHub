import { useState } from "react";
import { addDays } from "date-fns";

import { createNewExamField } from "@/lib";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LoadingBtn from "@/components/LoadingBtn";

const CreateNewExamTemplate = () => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <div>
      <DatePickerWithRange date={date} setDate={setDate} />
      <div className="mt-10">
        {createNewExamField.map((item, i) => (
          <div
            className="grid w-full max-w-[500px] items-center gap-1.5 my-5"
            key={`${item.label}-${i}`}
          >
            <Label htmlFor="course_code" className="capitalize">
              {item.label}
            </Label>
            <Input
              type={item.type ? item.type : "text"}
              id="course_code"
              className="py-5"
              placeholder={item.placeholder}
            />
          </div>
        ))}
        <div className="grid w-full max-w-[500px] gap-1.5">
          <Label htmlFor="description">Exam Rules</Label>
          <Textarea placeholder="Type your message here." id="description" />
        </div>
        <LoadingBtn classname="mt-5">Creating your exam</LoadingBtn>
        <Button className="w-fit capitalize bg-indigo-600 mt-5 text-gray-50 font-medium hover:bg-indigo-700">
          create exam
        </Button>
      </div>
    </div>
  );
};

export default CreateNewExamTemplate;
