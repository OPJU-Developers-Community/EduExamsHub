"use client";
import { usePathname } from "next/navigation";

const CreateExam = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>CreateExam</div>;
};

export default CreateExam;
