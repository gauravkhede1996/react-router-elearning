import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from './pages/app/details/Details';
import Learn from './pages/app/learn/Learn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorToast from "./components/error-toast/ErrorToast";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path:'/',
      element:<Nav />,
      children: [
        {
          path:'',
          element:<Hero />,
        },
        {
          path:'courses',
          children: [
            {
              path:'',
              element: <Courses />
            },
            {
              path:':courseId',
              element: <Details />
            }
          ]
        },
        {
          path:'learn',
          children: [
            {
              path:'',
              element:<ErrorToast />
            },
            {
              path:':courseId',
              element: <Learn />
            }
          ]
        }
      ]
    }
  ]);
  return (
    // <div className="App">
    //   <Nav />
    //   <Hero />
    //   <Courses />
    //  </div>
    <>
    <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
