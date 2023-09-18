import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import { BrowserRouter, Router, Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/register/Register";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People"
import Tv from "./Components/Tv/Tv"
import  Home  from "./Components/Home/Home";

const routers = createBrowserRouter([
  {
    path: "/",element: <Layout/>
    ,
    children: [
      { index:true, element: <Register /> },
      { path: "/home", element: <Home /> },
      { path: "/people", element: <People /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tv", element: <Tv /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
<>
<RouterProvider router={routers}/>


</>

  )
}

export default App