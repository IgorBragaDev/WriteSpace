import { ToastContainer } from "react-toastify";
import { SessionsProvider } from "./context/sessionsContext";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import RoutesMain from "./routes/routes";
import { CategoriesProvider } from "./context/categoriesContext";

function App() {

  return (
    <>
      <SessionsProvider>
        <CategoriesProvider>
          <RoutesMain />
          <ToastContainer />
        </CategoriesProvider>
      </SessionsProvider>
    </>
  );
}

export default App;
