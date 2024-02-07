// import axios from "axios";

// const apiInstance = () => {
//   const access_token = localStorage.getItem("access_token") || "akd";

//   if (access_token !== null) {
//     const parsedToken = JSON.parse(access_token);

//     return axios.create({
//       baseURL: `${process.env.NEXT_PUBLIC_URL}`,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${parsedToken}`,
//       },
//     });
//   } else {
//     throw new Error("No token present...");
//   }
// };

// const baseApi = (options) => {
//   const api = apiInstance();
//   const { payload = null, ...restOptions } = options;

//   return api({
//     ...restOptions,
//     data: payload,
//   });
// };

// export default baseApi;
