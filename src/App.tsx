import {HostLayout, Layout} from "./Components";
import {
  Home,
  Shoe,
  shoeLoader,
  About,
  SearchResult,
  DashBoard,
  searchLoader,
  ShoeDetails,
  shoeDetailsLoader,
  Shoes,
  listShoeLoader,
  NotFound,
  Error,
  Login,
  Signup,
  loginLoader,
} from "./Pages";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom"
import { ToastContainer} from "react-toastify";
import styles from "./style";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="shoe"
        element={<Shoe />}
        loader={shoeLoader}
        errorElement={<Error />}
      />
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route path="signup" element={<Signup />} />
      <Route path="about" element={<About />} />
      <Route
        path="shoe/:id"
        element={<ShoeDetails />}
        loader={shoeDetailsLoader}
        errorElement={<Error />}
      />
      <Route path="about" element={<About />} />
      <Route path="search" element={<SearchResult />} loader={searchLoader} />
      <Route path="product" element={<HostLayout />}>
        <Route
         index
          element={<DashBoard />}

        />
        <Route path="shoe" element={<Shoes />} loader={listShoeLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route element={<ToastContainer />} />
    </Route>
  )
);



function App() {
  return (
    <div className={` ${styles.flexCenter} bg-secondary overflow-hidden`}>
      <div className={` ${styles.boxWidth}`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App
