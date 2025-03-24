/* global FB */
import { useState, useEffect, useRef } from "react";
import WalletConnect from "./WalletConnect";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
import wallet from "../assets/wallet.png";
import google from "../assets/image/icons/google.svg";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import {
  signUpWithGoogle,
  loginWithGoogle,
  loginWithWallet,
} from "../Services/authentication-service";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Added this import

export default function SocialButtons({ signIn } = {}) {
  const navigate = useNavigate(); // Add this for navigation
  const isInitialMount = useRef(true);

  const {
    address,
    isConnected,
    caipAddress,
    status,
    embeddedWalletInfo,
    provider,
    providerType,
    signMessage,
  } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const { open, close } = useAppKit();

  // Loading states for all buttons
  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [walletLoading, setWalletLoading] = useState(false);

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      disconnectWallet();
    }
    if (!isInitialMount.current) {
      if (isConnected && address) {
        loginWithWallets();
      }
    }

    return () => {};
  }, [isConnected, address]);

  const loginWithWallets = async () => {
    setWalletLoading(true);
    try {
      var res = await loginWithWallet({
        walletAddress: address,
      });
      if (res.status === "success") {
        navigate("/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Failed to connect wallet. Please try again.");
    } finally {
      setWalletLoading(false);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
  };

  const openModal = () => {
    if (!walletLoading) {
      setWalletLoading(true);
      open();
      // Reset wallet loading state after a short delay
      setTimeout(() => setWalletLoading(false), 500);
    }
  };

  // Initialize Facebook SDK
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
    };

    // Load the SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleGoogleSuccess = async (response) => {
    setGoogleLoading(true);
    try {
      console.log(response, "response success");

      // Decode for debugging purposes
      const decodedData = jwtDecode(response.credential);
      console.log(decodedData, "decoded data");

      const ipResponse = await axios.get("https://ipapi.co/json/");
      const countryName = ipResponse.data.country_name || "Unknown";

      var result = signIn
        ? await signUpWithGoogle({
            token: response.credential,
            countryName: countryName,
          })
        : await loginWithGoogle({
            token: response.credential,
            countryName: countryName,
          });

      console.log(result, "API response");

      if (result.status === "success") {
        localStorage.setItem("token", result.data.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.data));
        window.location.href = "/dashboard";
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Google authentication error:", error);
      toast.error("Google authentication failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGoogleError = (error) => {
    console.log(error, "response error");
    setGoogleLoading(false);
    toast.error("Google authentication failed. Please try again.");
  };

  const handleGoogleClick = (onClick) => {
    setGoogleLoading(true);
    onClick();
  };

  const handleFacebookLogin = async () => {
    try {
      setFacebookLoading(true);

      FB.login(
        async function (response) {
          if (response.authResponse) {
            console.log("Welcome! Fetching your information...", response);
            const accessToken = response.authResponse.accessToken;

            try {
              const ipResponse = await axios.get("https://ipapi.co/json/");
              const countryName = ipResponse.data.country_name || "Unknown";

              const result = await axios.post(
                `${API_URL}/user/register-facebook`,
                {
                  accessToken: accessToken,
                  countryName: countryName,
                }
              );

              console.log(result.data, "Facebook API response");

              if (result.data.success) {
                localStorage.setItem("token", result.data.data.token);
                localStorage.setItem("user", JSON.stringify(result.data.data));
                window.location.href = "/dashboard";
              } else {
                toast.error(
                  "Facebook authentication failed: " + result.data.message
                );
              }
            } catch (error) {
              console.error("Error authenticating with Facebook:", error);
              toast.error("Facebook authentication failed. Please try again.");
            }
          } else {
            console.log("User cancelled login or did not fully authorize.");
            toast.error("Facebook login was cancelled.");
          }
          setFacebookLoading(false);
        },
        { scope: "public_profile,email" }
      );
    } catch (error) {
      console.error("Error with Facebook login:", error);
      setFacebookLoading(false);
      toast.error("Facebook login failed. Please try again.");
    }
  };

  const handleAppleLogin = () => {
    setAppleLoading(true);
    // Implement Apple login logic here
    setTimeout(() => {
      toast.info("Apple login is not implemented yet.");
      setAppleLoading(false);
    }, 1000);
  };

  // Common loading spinner component for consistency
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <>
      <div className="mt-6">
        <div className="text-center text-sm text-gray-500 mb-4">OR</div>
        <div className="grid grid-cols-2 gap-3">
          <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            cookiePolicy="single_host_origin"
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            onFailure={handleGoogleError}
            render={(renderProps) => (
              <button
                onClick={() => handleGoogleClick(renderProps.onClick)}
                disabled={googleLoading || renderProps.disabled}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-normal text-[#6E757D] hover:bg-gray-50 h-10"
              >
                {googleLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <img src={google} alt="google" className="h-5 w-5 mr-2" />
                    Google
                  </>
                )}
              </button>
            )}
          />
          <button
            onClick={handleFacebookLogin}
            disabled={facebookLoading}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-normal text-[#6E757D] hover:bg-gray-50 h-10"
          >
            {facebookLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <img src={facebook} alt="facebook" className="h-5 w-5 mr-2" />
                Facebook
              </>
            )}
          </button>
          <button
            onClick={handleAppleLogin}
            disabled={appleLoading}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-normal text-[#6E757D] hover:bg-gray-50 h-10"
          >
            {appleLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <img src={apple} alt="apple" className="h-5 w-5 mr-2" />
                Apple
              </>
            )}
          </button>
          <button
            onClick={openModal}
            disabled={walletLoading}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-normal text-[#6E757D] hover:bg-gray-50 h-10"
          >
            {walletLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <img src={wallet} alt="wallet" className="h-5 w-5 mr-2" />
                Wallet
              </>
            )}
          </button>
        </div>
      </div>

      <WalletConnect
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
}
