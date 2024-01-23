import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
function App() {
const router=createBrowserRouter([
    {path:"/",element:<Login/>},
    {path:"/browse",element:<Browse/>}
  ]
)
return (
  <div>
    <RouterProvider router={router}/>
  </div>
)
}

export default App;
