import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MediaDetails from "./pages/MediaDetails";
import PersonDetails from "./pages/PersonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/media/:id", element: <MediaDetails /> },
      { path: "/person/:id", element: <PersonDetails /> },
    ],
  },
]);

export default router;
