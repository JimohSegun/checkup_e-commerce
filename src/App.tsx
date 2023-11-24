import {Layout} from "./Components";
import { Home, Product } from "./Pages";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import styles from "./style";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home  />} />
      <Route path="product" element={<Product />} />
    </Route>
  )
);



function App() {
  return (
    <div className={` ${styles.flexCenter} bg-secondary`}>
      <div className={` ${styles.boxWidth}`}>
          <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App
