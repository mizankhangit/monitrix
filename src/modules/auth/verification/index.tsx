import React from "react";
import { Link } from "react-router-dom";

const Verification = () => {
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
            <h4 className="text-2xl font-bold">Check Your Email</h4>
            <p>
              We sent a verification code to{" "}
              <Link to="#" className="hover:text-secondary">
                Email.
              </Link>{" "}
              Enter the code from the email in the field below.
            </p>
          </div>
          <form action="">
            <div className="mt-3">
              <label
                htmlFor="email"
                className="mb-1 inline-block text-sm font-medium"
              >
                Type Your Security Code
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Security Code"
                className="input_field"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-6">
              Verify My Account
            </button>
          </form>
          <div className="flex justify-center items-center">
            <p className="pt-6">
              Didn't get the code?{" "}
              <Link to="#" className="hover:text-secondary">
                Resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
