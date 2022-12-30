import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "./components/others/spinner/Loader"
// import routes as lazy components
const LazyBaseLayout = React.lazy(() =>
  import("./components/layouts/BaseLayout")
);
const LazyHome = React.lazy(() => import("./components/home/Home"));
const LazyBlogs = React.lazy(() => import("./components/blog/Blog"));
const LazyContact = React.lazy(() => import("./components/contact/Contact"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={"/"}
        element={
          <React.Suspense fallback={<Loader/>}>
            <LazyBaseLayout />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<Loader/>}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <React.Suspense fallback={<Loader/>}>
              <LazyBlogs />
            </React.Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <React.Suspense fallback={<Loader/>}>
              <LazyContact />
            </React.Suspense>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
