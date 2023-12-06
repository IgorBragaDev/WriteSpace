
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
