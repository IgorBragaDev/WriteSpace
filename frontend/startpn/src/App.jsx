import { ToastContainer } from "react-toastify";
import { SessionsProvider } from "./context/sessionsContext";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <SessionsProvider>
        <RoutesMain />
        <ToastContainer/>
      </SessionsProvider>
    </>
  );
}

export default App;
