import axios from "axios";

export const getAllExamsApi = async (payload) => {
  const { page = 1, limit = 10 } = payload;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/exam/all`,
      {
        params: {
          page,
          limit,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
