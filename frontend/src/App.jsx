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

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TrackOrder from "./pages/TrackOrder";
import FindLocation from "./pages/FindLocation";
import StoreLocation from "./pages/StoreLocation";
import HelpPage from "./pages/HelpPage";
import Blogs from "./pages/Blogs";
import CompliantsPage from "./pages/CompliantsPage";
import ProfilePage from "./pages/ProfilePage";
import HistoryPage from "./pages/HistoryPage";
import AllCurrencyPage from "./pages/AllCurrencyPage";
import SendPage from "./pages/SendPage";
import NewContactPage from "./pages/NewContactPage";
import MyContactPage from "./pages/MyContactPage";
import ReceiverInfoPage from "./pages/ReceiverInfoPage";
import BeneficiaryInfoPage from "./pages/BeneficiaryInfoPage";
import MobileMoneyPage from "./pages/MobileMoneyPage";
import CashPage from "./pages/CashPage";
import CardPage from "./pages/CardPage";
import ConfirmCryptoPage from "./pages/ConfirmCryptoPage";
import NotFoundPage from "./pages/NotFoundPage";
import PendingPage from "./pages/PendingPage";
// import NotFoundPage from "./pages/NotFoundPage"; // Assuming you have a 404 page

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

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/find-location" element={<FindLocation />} />
            <Route path="/store-location" element={<StoreLocation />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/complaints" element={<CompliantsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/currency" element={<AllCurrencyPage />} />
            <Route path="/send">
            <Route index element={<SendPage />} />
            <Route path="new-contact" element={<NewContactPage />} /> {/* Relative to /send */}
            <Route path="my-contact" element={<MyContactPage />} /> {/* Relative to /send */}
            <Route path="receiver-info" >
                <Route index element={<ReceiverInfoPage />} />
                <Route path="beneficiary" element={<BeneficiaryInfoPage />} />
                <Route path="confirm-crypto" element={<ConfirmCryptoPage />} />
                <Route path="pending" element={<PendingPage />} />
            </Route>
            <Route path="receiver-method" >
                <Route index element={<MobileMoneyPage />} />
                <Route path="cash" element={<CashPage />} />
                <Route path="card" element={<CardPage />} />
            </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
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
