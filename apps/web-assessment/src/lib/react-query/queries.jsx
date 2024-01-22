import { useMutation } from "@tanstack/react-query";
import baseApi from "../axios/instance";

export const useCreateNewExam = () => {
  return useMutation({
    mutationFn: (exam) => {
      return baseApi({
        method: "POST",
        url: "/create-new-exam",
        payload: exam,
      });
    },
  });
};
