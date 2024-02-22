import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-DOM/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  const [userName, setuserName] = useState();

  // authentication
  useEffect(() => {
    // make an api call and send username and password
    const data = {
      name: "Rutuja Kumbharkar",
    };
    setuserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
