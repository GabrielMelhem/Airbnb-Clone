import React, { useState }  from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import google from "../images/google.png";
import facebook from "../images/facebook.jpeg";
import mail from "../images/mail.png";
import phone from "../images/phone.png";

interface logProps {
  setLog?: any
}

const Login = (props:logProps) => {
    const [email, setEmail] = useState(false);
    return (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                  <h1 onClick={()=>props.setLog(false)} className='cursor-pointer' >X</h1>
                  <h3
                    className="ml-36 text-base font-bold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Log in or sign up
                  </h3>
                </div>
                <hr className="mt-4" />
                <h1 className="mt-4 font-semibold text-2xl ml-5">
                  Welcome to Airbnb Clone
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
    
                <h1 className="text-xs ml-5 mt-3">
                  We’ll call or text you to confirm your number. Standard message
                  and data rates apply. Privacy Policy
                </h1>
    
                <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded mt-3 w-11/12 h-12 ml-5">
                  {email ? "Agree and Continue" : "Continue"}
                </button>
                <h1 className="text-center mt-3">or</h1>
                <div className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-3 ml-5 cursor-pointer hover:bg-gray-200">
                  <img src={facebook} className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Facebook</h1>
                </div>
                <div className="flex items-center border border-spacing-1 rounded-xl border-black w-11/12 p-3 mt-4 ml-5 cursor-pointer hover:bg-gray-200">
                  <img src={google} className="w-6 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Google</h1>
                </div>
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
}

export default Login