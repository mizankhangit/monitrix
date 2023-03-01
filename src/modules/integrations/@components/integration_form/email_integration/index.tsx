import React from "react";

const EmailIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">
        Add Email Id to get Notification by Email
      </h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="email" className="input_label">
            Email Id <span className="text-danger">*</span>
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
        <ul className="list-disc ml-4 p-0">
          <li>
            SignUp (If you have no account in Twilio) or SignIn on
            <span>
              <a href="https://www.twilio.com/">
                <span className="text-secondary hover:text-primary font-medium transition-all">
                  {" "}
                  Twilio{" "}
                </span>
              </a>
            </span>
          </li>
          <li>
            Go to
            <span>
              <a href="https://www.twilio.com/">
                <span className="text-secondary hover:text-primary font-medium transition-all">
                  {" "}
                  Twilio Console{" "}
                </span>
              </a>
            </span>
            and generate twilio number.
          </li>
          <li>
            Copy your account SID, auth token, Twilio number and put it on
            account SID, auth token, from field sequentially.
          </li>
          <li>
            Put your own cell number include country code to get sms and save.
          </li>
          <li>Twilio channel setup is done!</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailIntegration;
