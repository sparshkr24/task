import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./page/page1";
import Page2 from "./page/page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Page1 />
    ),
  },
  {
    path: "/page1",
    element: (
      <Page1 />
    ),
  },
  {
    path: "/page2",
    element: (
      <Page2 />
    ),
  },
  {
    path: "/*",
    element: <div>404 not found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
