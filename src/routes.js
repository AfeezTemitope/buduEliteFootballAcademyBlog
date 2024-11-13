import  {createBrowserRouter} from "react-router-dom";
import LandingPage from "./LandingPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    }
]);

export default routes