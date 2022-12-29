import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import routes as lazy components
const LazyHomeLayout = React.lazy(() =>
  import("./components/layouts/HomeLayout")
);
const LazyHome = React.lazy(() => import("./components/home/Home"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={"/"}
        element={
          <React.Suspense fallback="Loading.....">
            <LazyHomeLayout />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback="Loading.....">
              <LazyHome/>
            </React.Suspense>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
