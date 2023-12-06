import { create } from "apisauce";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = create({
  baseURL: "http://192.168.0.15:3000/",
});

api.addAsyncRequestTransform((response) => async () => {
  const token = await AsyncStorage.getItem("authToken");
  if (token) {
    response.headers["Authorization"] = `Bearer ${token}`;
  }
});

export default api;
