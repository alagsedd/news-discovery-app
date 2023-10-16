import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../../pages/HomePage";
import NewsDetailPage from "../../pages/NewsDetailPage";
import ErrorPage from "../../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "news-detail:id", element: <NewsDetailPage /> },
    ],
  },
]);

export default router;
