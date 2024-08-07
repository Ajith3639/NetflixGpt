import { Provider } from "react-redux";
import store from "./store/store";
import Browse from "./components/Common/Browse";
import Login from "./components/Common/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GptSearch from "./components/GptSearchPage/GptSearch";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
    { path: "/search", element: <GptSearch /> },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
