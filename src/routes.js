import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Post from "./Pages/Post";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/post",
        element: <Post />,
    },
]);

export default routes;
