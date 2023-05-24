import { BrowserRouter as Router, createBrowserRouter, Route, Routes, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Footer from "./Components/Footer/Footer"
import Add from "./Pages/Add/Add"
import Gig from "./Pages/Gig/Gig"
import Gigs from "./Pages/Gigs/Gigs"
import Message from "./Pages/Message/Message"
import Messages from "./Pages/Messages/Messages"
import Mygig from "./Pages/MyGig/Mygig"
import Order from "./Pages/Order/Order"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const Layout = () => {
    return (
      <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add/:id",
          element: <Add />,
        },
        {
          path: "/gig",
          element: <Gig />,
        },
        {
          path: "/gigs/:id",
          element: <Gigs />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages/:id",
          element: <Messages />,
        },
        {
          path: "/mygig/:id",
          element: <Mygig />,
        },
        {
          path: "/order/:id",
          element: <Order />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
