import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
  Outlet,
} from "react-router-dom";
import Products from "./Routes/Products";
import Reports from "./Routes/Reports";
import Homepage from "./Routes/Homepage";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Messages from "./Routes/Messages";
import Support from "./Routes/Support";
import Team from "./Routes/Team";


export const AppLayout=()=> (<>
    <NavBar/>
    <Outlet/>
  </>)


const router = createBrowserRouter([
 {
  element:<AppLayout/>,
  children:[
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "products",
      element: <Products/>,
    },
    {
      path: "reports",
      element: <Reports/>,
    },
    {
      path: "team",
      element: <Team/>,
    },
    {
      path: "messages",
      element: <Messages/>,
    },
    {
      path: "support",
      element: <Support/>,
    },
  ]
 }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


