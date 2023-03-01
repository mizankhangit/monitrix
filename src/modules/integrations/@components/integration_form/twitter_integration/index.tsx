import React from "react";

const TwitterIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Update Twitter Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="userName" className="input_label">
            Twitter Username <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="userName"
            placeholder="Twitter Username"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>
        <div className="mt-4">
          <label htmlFor="secretToken" className="input_label">
            Twitter Token Secret <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="secretToken"
            placeholder="Twitter Token Secret"
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="accessToken" className="input_label">
            Twitter Access Token <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="accessToken"
            placeholder="Twitter Access Token"
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="apiSecret" className="input_label">
            Twitter API Secret <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="apiSecret"
            placeholder="Twitter API Secret"
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="apiKey" className="input_label">
            Twitter API Key <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="apiKey"
            placeholder="Twitter API Key"
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
            <span>SignUp (If you have no account in Twitter) or SignIn on</span>
            <a href="https://twitter.com/">
              <span className="text-secondary hover:text-primary font-medium transition-all">
                {" "}
                Twitter
              </span>
            </a>
          </li>
          <li>
            <span>Go to</span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Twitter developer Console </span>
            </a>
            and click Apps link
          </li>
          <li>
            Create App by putting necessary information and follow some Steps.
          </li>
          <li>
            Verify your developers account by email (If your account is not
            email verified)
          </li>
          <li>Twitter takes time to review app and confirmation</li>
          <li>
            After twitter review, copy your account information and put it on
            this forum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TwitterIntegration;
