// Import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
