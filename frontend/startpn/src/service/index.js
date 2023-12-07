
import { create } from "apisauce";

const api = create({
  baseURL: "https://startpn23.onrender.com/",
});

api.addAsyncRequestTransform((response) => async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    response.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default api;
