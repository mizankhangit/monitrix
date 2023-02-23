import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div className="flex flex-col justify-center items-center max-w-[480px] w-full mx-auto px-5 md:px-0">
        <div className="w-[240px] h-[60px] mb-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-full object-cover	"
          />
        </div>
        <div className="border w-full py-10 px-5 md:px-8 rounded">
          <div className="mb-5">
            <h4 className="text-2xl font-bold mb-3">Forgot Password?</h4>
            <p>
              Enter your email, and we'll send you instructions to reset your
              password
            </p>
          </div>
          <form action="">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="mb-1 inline-block text-sm font-medium"
              >
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="info@softnio.com"
                className="input_field"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-6">
              Send Reset Link
            </button>
          </form>
          <div className="flex justify-center items-center">
            <p className="pt-6">
              <Link to="/login" className="hover:text-secondary">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
