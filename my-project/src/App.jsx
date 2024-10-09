import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { BuyCar } from "./pages/BuyCar";
import { Dealers } from "./pages/Dealers";
import { Help } from "./pages/Help";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { DealerDetails } from './pages/dealerDetails';
import { CarDetails } from "./pages/carDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/buyacar", element: <BuyCar /> },
      { path: "/buyacar/:carId", element: <CarDetails/> },
      { path: "/dealers", element: <Dealers /> },
      { path: "/dealers/:id", element: <DealerDetails /> },
      { path: "/help", element: <Help /> },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};
export default App;
