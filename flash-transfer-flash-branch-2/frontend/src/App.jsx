import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AppInfo from "./pages/AppInfo";
import KycPage from "./pages/KycPage";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Registration from "./pages/Registration";
import Beneficiary from "./pages/Beneficiary";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route index element = { <Landing /> } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/app-info" element={<AppInfo />} />
          <Route path="/kyc" element={<KycPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
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