import { useState } from "react";
import { addDays } from "date-fns";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";

const CreateNewExamTemplate = () => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <div>
      <DatePickerWithRange date={date} setDate={setDate} />
    </div>
  );
};

export default CreateNewExamTemplate;
