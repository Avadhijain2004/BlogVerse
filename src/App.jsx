import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootElementForApp from "./RootElementForApp";
import Home from './pages/Home'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Author from './pages/Author'
import BlogPost from './pages/BlogPost'
import Category from './pages/Category'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Subscribe from './pages/Subscribe'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElementForApp />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/author",
          element: <Author />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog-post",
          element: <BlogPost />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/subscribe",
          element: <Subscribe />,
        },

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
