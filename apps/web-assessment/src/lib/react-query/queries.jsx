import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCreateNewExam = () => {
  return useMutation({
    mutationFn: (exam) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_URL}/exam/create-new-exam`,
        exam
      );
    },
  });
};
