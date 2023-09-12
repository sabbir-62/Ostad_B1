import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

function App() {
  return (
    <div class = "App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
