import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-12">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const routerProvider = () => {
  return <RouterProvider router={appRouter} />;
};

export default routerProvider;
