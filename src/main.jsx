import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Accordion from "./components/Accordion.jsx";

const AccItems = [
  {
    title: "Accordion 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga, ex animi iste illo cum blanditiis ad accusantium ipsum quas aliquid vel debitis aperiam dignissimos porro nostrum in mollitia nisi!",
  },
  {
    title: "Accordion 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti a exercitationem? Eveniet modi voluptate hic praesentium.",
  },
];

const AccordionWrapper = () => <Accordion options={AccItems} />;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="product" element={<AccordionWrapper />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
