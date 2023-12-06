// import axios from "axios"

// const api = axios.create({
//   baseURL: "http://localhost:3000/",
// });

// export default api;

import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:3000/",
});

api.addAsyncRequestTransform((response) => async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    response.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default api;
