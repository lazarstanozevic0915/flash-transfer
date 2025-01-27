import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./pages/Landing"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route index element = { <Landing /> } />
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