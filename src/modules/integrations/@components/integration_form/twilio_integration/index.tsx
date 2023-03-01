import React from "react";

const TwilioIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Update Twilio Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="accountSID" className="input_label">
            Twilio Account SID
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="accountSID"
            placeholder="Twilio Account SID"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>
        <div className="mt-4">
          <label htmlFor="twilioAuth" className="input_label">
            Twilio Auth Token
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="twilioAuth"
            placeholder="Twilio Auth Token"
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="from" className="input_label">
            From <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            name="text"
            id="from"
            placeholder=""
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="to" className="input_label">
            To <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            name="text"
            id="to"
            placeholder=""
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
            <span>SignUp (If you have no account in Twilio) or SignIn on </span>
            <a
              href="https://www.twilio.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span>Twilio</span>
            </a>
          </li>
          <li>
            <span>Go to </span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Twilio Console </span>
            </a>
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

export default TwilioIntegration;
