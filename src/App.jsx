import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderFooter from "./components/headerfooter/HeaderFooter";
import Home from "./templates/Home";
import Detail, { loadProduct } from "./templates/Detail";
import Cart, { cartLoader, cartAction } from "./templates/Cart";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pd/:pdName",
        element: <Detail />,
        loader: loadProduct,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: cartLoader,
        action: cartAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
