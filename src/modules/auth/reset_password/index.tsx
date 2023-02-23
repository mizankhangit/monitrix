import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  return (
    <div className="grid place-items-center h-screen ">
      <div className="flex flex-col justify-center items-center max-w-[480px] w-full mx-auto px-5 md:px-0 ">
        <div className="w-[240px] h-[60px] mb-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-full object-cover	"
          />
        </div>
        <div className="border w-full py-10 px-5 md:px-8 rounded">
          <div className="mb-5">
            <h4 className="text-2xl font-bold">Reset Password</h4>
          </div>
          <form action="" className="form">
            <div className="mt-4">
              <label
                htmlFor="password"
                className="mb-1 inline-block text-sm font-medium"
              >
                New Password <span className="text-danger">*</span>
              </label>
              <div className="relative">
                <input
                  type={passwordType}
                  name="new password"
                  id="password"
                  placeholder="New Password"
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
                  <div>
                    {passwordType == "password" && (
                      <AiOutlineEyeInvisible className="text-xl" />
                    )}
                    {passwordType == "text" && (
                      <AiOutlineEye className="text-xl" />
                    )}
                  </div>
                </div>
              </div>
              <div className="error">This field is required</div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="mb-1 inline-block text-sm font-medium"
              >
                Confirm Password <span className="text-danger">*</span>
              </label>
              <div className="relative">
                <input
                  type={confirmPasswordType}
                  name="confirm password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="input_field"
                />
                <div
                  className="eye_icons"
                  onClick={() =>
                    setConfirmPasswordType(
                      confirmPasswordType == "password" ? "text" : "password"
                    )
                  }
                >
                  {confirmPasswordType == "password" && (
                    <AiOutlineEyeInvisible className="text-xl" />
                  )}
                  {confirmPasswordType == "text" && (
                    <AiOutlineEye className="text-xl" />
                  )}
                </div>
              </div>
              <div className="error">This field is required</div>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-6">
              Set New Password
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

export default ResetPassword;
