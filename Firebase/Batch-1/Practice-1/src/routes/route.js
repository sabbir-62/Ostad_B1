
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home"
import User from "../components/user/User";
import Main from "../layout/Main";
import { userLoader } from "../loaders/userLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/users",
                loader: userLoader,
                element: <User></User>
            }
        ]
    }
])

export default router;