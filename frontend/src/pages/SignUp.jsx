import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "../hooks/useForm";
import { validateSignUp } from "../utils/validation";
import AuthLayout from "../components/AuthLayout";
import SocialButtons from "../components/SocialButtons";
import { MoneyTransferIllustration } from "../components/Illustrations";
import logo from "../assets/image/logo.svg";
import { language } from "../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError, signUpUser } from "../store/authSlice";
import {
  signUpWithEmail,
  signUpWithWallet,
} from "../Services/authentication-service";
import { getLocalStorageData } from "../Services/axiosComponent";
import { toast } from "react-toastify";
import { errorResponseHandler } from "../Services/helper";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(language.english);

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
      countryName: "",
      marketing: false,
    },
    validateSignUp
  );

  useEffect(() => {
    dispatch(clearError());
    
    // Fetch countries from REST Countries API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        // Sort countries by name
        const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        ).map(country => ({
          name: country.name.common,
          flag: country.flags.svg || country.flags.png
        }));
        
        setCountries(sortedCountries);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to load countries. Please try again later.');
      }
    };

    fetchCountries();
  }, [dispatch]);

  const handleCountrySelect = (country) => {
    handleChange({
      target: {
        name: "countryName",
        value: country.name,
      },
    });
    setSelectedFlag(country.flag);
    setShowCountryDropdown(false);
  };

  const onSubmit = async (formValues) => {
    var wallet = localStorage.getItem("wallet");
    
    const res =
      wallet == null
        ? await signUpWithEmail({
            email: formValues.email,
            password: formValues.confirmPassword,
            countryName: formValues.countryName,
            requestType: "WEB",
          })
        : await signUpWithWallet({
            email: formValues.email,
            password: formValues.confirmPassword,
            countryName: formValues.countryName,
            requestType: "WEB",
            ...JSON.parse(wallet),
          });

    console.log(res, "res in sign up");
    if (res.status == "success") {
      await wait(1000);
      toast.success(res.message);
      console.log(res);

      navigate("/signIn");
    } else {
      toast.error(res.message);
      var error = errorResponseHandler(res);
      error.map((err) => {
        toast.error(err);
      });

      setError("User already exists. Please check again!");
    }
  };
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  return (
    <AuthLayout illustration={<MoneyTransferIllustration />}>
      <div>
        <div className=" md:hidden flex justify-center items-center">
          <img src={logo} alt="" className="h-[80px] w-[80px] object-contain" />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Create an account
        </h2>
        <div>
          <p className="md:text-gray-600 md:mb-6 md:text-center hidden">
            Let's get started with your 30 days free trial
          </p>
          <p className="md:hidden text-gray-800 text-lg font-semibold text-center mb-10">
            Register Your Account ✍️
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Send From
            </label>
            <div className="relative w-full ">
              <div className="absolute left-3 top-2.5 border-r border-gray-400 py-0">
                <img src={selectedFlag} alt="" className="w-6 h-6 mr-2" />{" "}
              </div>
              <input
                type="text"
                id="country"
                name="countryName"
                className="border p-2.5 pl-14 rounded-md text-[14px] border-[#D3D8DD] w-full"
                value={values.countryName}
                onChange={handleChange}
                placeholder="Choose your Location"
                required
                readOnly
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              />

              <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              
              {showCountryDropdown && (
                <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {countries.length > 0 ? (
                    countries.map((country, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[14px] flex items-center"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <img src={country.flag} alt={`${country.name} flag`} className="w-5 h-5 mr-2" />
                        {country.name}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-[14px]">Loading countries...</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 
                ${errors.email ? "border-red-500" : "border-gray-300"} ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Set Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Set your password"
                className={`mt-1 block w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500
                  ${errors.password ? "border-red-500" : "border-gray-300"} ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className={`mt-1 block w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500
                  ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              checked={values.marketing}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "marketing",
                    value: e.target.checked,
                  },
                })
              }
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-600">
              If you DO NOT wish to receive marketing information about our
              products and special offers, please check this box
            </label>
          </div>

          {errors.submit && (
            <p className="text-sm text-red-600">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {localStorage.getItem("wallet") == null ? (
          <SocialButtons signIn={false} />
        ) : null}

        <p className="md:mt-6 text-center text-sm text-gray-600 mt-12">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}