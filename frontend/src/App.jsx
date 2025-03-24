import { useEffect } from "react";
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
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
import ReviewDetailsPage from "./pages/ReviewDetailsPage";
import ConfirmCryptoPage from "./pages/ConfirmCryptoPage";
import PendingPage from "./pages/PendingPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentCompletePage from "./pages/PaymentCompletePage";
import PaymentReceivedPage from "./pages/PaymentReceivedPage";
import SendCryptoPage from "./pages/SendCryptoPage";

import { AuthProvider } from "./auth/AuthProvider";
import ScrollRestoration from "./components/ScrollRestoration";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

import 'react-toastify/dist/ReactToastify.css';

import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from "react-toastify";
import SenderDetailsPage from "./pages/SenderDetailsPage";


const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  if (!isAuthenticated) {
    return <Navigate to={`/signin`} replace />;
  }

  return <Outlet />;
};

const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  if (isAuthenticated) {
    return <Navigate to={`/`} replace />;
  }

  return <Outlet />;
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ScrollToTop />}>
        {/* Public routes - available to everyone */}
        <Route index element={<Landing />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/app-info" element={<AppInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/blog" element={<Blogs />} />
        
        {/* Auth routes - only for non-authenticated users */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        
        {/* Protected routes - only for authenticated users */}
        <Route element={<ProtectedRoute />}>
          <Route path="/kyc" element={<KycPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/beneficiary" element={<Beneficiary />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/find-location" element={<FindLocation />} />
          <Route path="/store-location" element={<StoreLocation />} />
          <Route path="/complaints" element={<CompliantsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/currency" element={<AllCurrencyPage />} />
          
          {/* Nested protected routes */}
          <Route path="/send">
            <Route index element={<SendPage />} />
            <Route path="new-contact" element={<NewContactPage />} />
            <Route path="my-contact" element={<MyContactPage />} />
            <Route path="sender-details" element={<SenderDetailsPage />} />
            <Route path="receiver-info" >
              <Route index element={<ReceiverInfoPage />} />
              <Route path="beneficiary" element={<BeneficiaryInfoPage />} />
              <Route path="send-crypto" element={<SendCryptoPage />} />
              <Route path="confirm-crypto" element={<ConfirmCryptoPage />} />
            </Route>
            <Route path="receiver-method" >
              <Route index element={<MobileMoneyPage />} />
              <Route path="cash" element={<CashPage />} />
              <Route path="card" element={<CardPage />} />
            </Route>
            <Route path="review-details">
              <Route index element={<ReviewDetailsPage />} />
              <Route path="confirm" element={<PaymentReceivedPage />} />
            </Route>
            <Route path="payment">
              <Route index element={<PendingPage />} />
              <Route path="success" element={<PaymentCompletePage />} />
            </Route>
          </Route>
        </Route>
        
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )


  return (
    // <AuthProvider>
    // </AuthProvider>
    <Provider store={store}>
      <RouterProvider router = { router }  />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </Provider>
  )
}

export default App
