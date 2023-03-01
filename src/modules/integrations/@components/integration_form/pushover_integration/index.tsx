import React from "react";

const PushoverIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Update Pushover Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="userkey" className="input_label">
            Pushover User Key
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="userkey"
            placeholder=" Pushover User Key"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>
        <div className="mt-4">
          <label htmlFor="apiToken" className="input_label">
            Pushover API Token
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="apiToken"
            placeholder=" Pushover API Token"
            className="input_field"
          />
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button type="button" className="btn btn-white">
            Test
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <div>
        <ul className="flex  flex-col gap-1 list-disc ml-4 p-0">
          <li>
            <span>
              SignUp (If you have no account in Pushover) or SignIn on
            </span>
            <a
              href="https://pushover.net/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Pushover</span>
            </a>
          </li>

          <li>Click Create an Application/API Token link.</li>

          <li>
            Put the information about your application and create application.
          </li>
          <li>
            Verify your developers account by email (If your account is not
            email verified)
          </li>
          <li>
            Now copy your API token and User key and put it on Pushover from.
          </li>
          <li>Your Pushover Setup is done!</li>
        </ul>
      </div>
    </div>
  );
};

export default PushoverIntegration;
