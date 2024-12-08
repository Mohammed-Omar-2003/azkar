import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Morning from "./components/Azkar/Morning.jsx";
import Evening from "./components/Azkar/Evening.jsx";
import PrayresTime from "./components/PrayresTime/PrayresTime.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rosary from "./components/Rosary/Rosary.jsx";
import Azkar from "./components/Azkar/Azkar.jsx";
import Qubla from "./components/Qibla/Qibla.jsx";
import AfterPraye from "./components/Azkar/AfterPraye.jsx";
import Sleeping from "./components/Azkar/Sleeping.jsx";
import WeakUp from "./components/Azkar/WeakUp.jsx";
import Alroqua from "./components/Azkar/Alroqua.jsx";
const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "azkar", element: <Azkar /> },
  { path: "prayresTime", element: <PrayresTime /> },
  { path: "/morning", element: <Morning /> },
  { path: "/evening", element: <Evening /> },
  { path: "/afterPraye", element: <AfterPraye /> },
  { path: "/sleeping", element: <Sleeping /> },
  { path: "/weakup", element: <WeakUp /> },
  { path: "/alroqua", element: <Alroqua /> },
  { path: "msbha", element: <Rosary /> },
  { path: "qibla", element: <Qubla /> },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);
