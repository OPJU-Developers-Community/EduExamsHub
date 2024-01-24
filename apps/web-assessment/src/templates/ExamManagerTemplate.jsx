import QuestionCreator from "@/components/QuestionCreator";
import { useRouter } from "next/router";

const ExamManagerTemplate = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      <QuestionCreator />
      {/* listed questions that are created */}
    </div>
  );
};

export default ExamManagerTemplate;
