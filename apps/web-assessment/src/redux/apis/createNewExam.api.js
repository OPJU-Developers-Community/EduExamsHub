import axios from "axios";

export const createNewExamApi = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/exam/create-new-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
