import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import google from "../images/google.png";
import facebook from "../images/facebook.jpeg";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";

interface signProps {
  setSign?: any;
}
const Signup = (props: signProps) => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState("");

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async() => {
    try {
      await user.confirm(otp);
    } catch (error) {
      console.error(error)
    }
    
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
              <h1
                onClick={() => props.setSign(false)}
                className="cursor-pointer"
              >
                X
              </h1>
              <h3
                className="ml-28 text-base font-bold leading-6 text-gray-900"
                id="modal-title"
              >
                {phone ? "Confirm your phone number" : "Log in or sign up" }
              </h3>
            </div>
            <hr className="mt-4" />
            <h1 className="mt-4 font-semibold text-2xl ml-5">
              {!phone && "Welcome to Airbnb Clone"}
            </h1>
            {email ? (
              <input
                type="text"
                className="border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none ml-5"
                placeholder="Email"
                required
              />
            ) : (
              <PhoneInput
                value={phone}
                onClick={() => setPhone("+" + phone)}
                placeholder="Phone number"
                inputStyle={{
                  width: "453px",
                  height: "50px",
                  fontSize: "17px",
                }}
                containerStyle={{ marginTop: "15px", marginLeft: "20px" }}
              />
            )}
            {email && (
              <input
                type="text"
                className="border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none ml-5"
                placeholder="Password"
                required
              />
            )}

            <div id="recaptcha" className="mt-5 ml-5"></div>
            {phone && (
              <button
                onClick={sendOtp}
                className="bg-rose-600 text-white font-bold py-2 px-4 rounded mt-3 w-11/12 h-12 ml-5"
              >
                Send OTP
              </button>
            )}
            {user && (
              <input
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                className="border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none ml-5"
                placeholder="Otp"
                required
              />
            )}
             {otp && <button
                onClick={verifyOtp}
                className="bg-rose-600 text-white font-bold py-2 px-4 rounded mt-3 w-11/12 h-12 ml-5"
              >
                Verify OTP
              </button>}
            <h1 className="text-xs ml-5 mt-3">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. Privacy Policy
            </h1>

            {!phone && <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded mt-3 w-11/12 h-12 ml-5">
              {email ? "Agree and Continue" : "Continue"}
            </button>}
            <h1 className="text-center mt-3">or</h1>
            {!phone && <div className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-3 ml-5 cursor-pointer hover:bg-gray-200">
              <img src={facebook} className="w-6 h-6 ml-3" />
              <h1 className="ml-24">Continue with Facebook</h1>
            </div>}
            {!phone && <div
              onClick={googleSignin}
              className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-4 ml-5 cursor-pointer hover:bg-gray-200"
            >
              <img src={google} className="w-6 h-6 ml-3" />
              <h1 className="ml-24">Continue with Google</h1>
            </div>}
            {!email ? (
              <div
                onClick={() => setEmail(true)}
                className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-4 ml-5 cursor-pointer hover:bg-gray-200"
              >
                <img src={mail} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with E-Mail</h1>
              </div>
            ) : (
              <div
                onClick={() => setEmail(false)}
                className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-4 ml-5 cursor-pointer hover:bg-gray-200"
              >
                <img src={phone} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with Phone</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
