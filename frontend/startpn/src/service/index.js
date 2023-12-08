
import { create } from "apisauce";

const api = create({
  baseURL: "localhost:8000/",
});

api.addAsyncRequestTransform((response) => async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    response.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default api;
