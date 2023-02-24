import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  return (
    <div className="grid place-items-center h-screen ">
      <div className="flex flex-col justify-center items-center max-w-[480px] w-full mx-auto px-5 md:px-0">
        <div className="w-[240px] h-[60px] mb-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border w-full py-10 px-5 md:px-8 rounded">
          <div className="mb-5">
            <h4 className="text-2xl font-bold mb-2">Sign-In</h4>
            <p>Access Monitrix using your email and password.</p>
          </div>
          <form action="" className="form">
            <div className="mt-4">
              <label htmlFor="email" className="input_label">
                Email or Username <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="info@softnio.com"
                className="input_field"
              />
              <div className="error">This field is required</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="input_label">
                  Password <span className="text-danger">*</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm hover:text-secondary font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="input_field"
                />
                <div
                  className="eye_icons"
                  onClick={() =>
                    setPasswordType(
                      passwordType == "password" ? "text" : "password"
                    )
                  }
                >
                  {passwordType === "password" && (
                    <AiOutlineEyeInvisible className="text-xl" />
                  )}
                  {passwordType === "text" && (
                    <AiOutlineEye className="text-xl" />
                  )}
                </div>
              </div>
              <div className="error">This field is required</div>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-6">
              Sign In
            </button>
          </form>
          <div className="flex justify-center items-center">
            <p className="pt-6 text-sm">
              New on our platform?{" "}
              <Link to="/register" className="hover:text-secondary">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
