import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./pages/Landing"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import TrackOrder from "./pages/TrackOrder"
import FindLocation from "./pages/FindLocation"
import StoreLocation from "./pages/StoreLocation"
import HelpPage from "./pages/HelpPage"
import Blogs from "./pages/Blogs"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route index element = { <Landing /> } />
          <Route path="/about" element = { <AboutUs /> } />
          <Route path="/contact" element = { <ContactUs /> } />
          <Route path="/track-order" element = { <TrackOrder /> } />
          <Route path="/find-location" element = { <FindLocation /> } />
          <Route path="/store-location" element = { <StoreLocation /> } />
          <Route path="/help" element = { <HelpPage /> } />
          <Route path="/blogs" element = { <Blogs /> } />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router = { router }  />
    </>
  )
}

export default App