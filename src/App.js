import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
function App() {
const router=createBrowserRouter([
    {path:"/",element:<Body/>},
    {path:"/browse",element:<Browse/>},
    {path:"/login",element:<Login/>}
  ]
)
return (
  <div>
    <RouterProvider router={router}/>
  </div>
)
}

export default App;
