import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div className="flex flex-col justify-center items-center max-w-[480px] w-full mx-auto px-6 ">
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
            <p>for</p>
          </div>
          <form action="">
            <div className="mt-4">
              <label
                htmlFor="password"
                className="mb-1 inline-block text-sm font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                name="new password"
                id="password"
                placeholder="New Password"
                className="input_field"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="mb-1 inline-block text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm password"
                id="password"
                placeholder="Confirm Password"
                className="input_field"
              />
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
