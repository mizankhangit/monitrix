import React from "react";

const SlackIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Update Slack Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="slackHook" className="input_label">
            Slack webhook url
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="slackHook"
            placeholder="Slack webhook url"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>

        <div className="mt-4">
          <label htmlFor="slackChannel" className="input_label">
            Slack Channel <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="slackChannel"
            placeholder="Slack Channel"
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
              Create a new workspace or signin your existing workspace by
              clicking
            </span>

            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Slack Signin </span>
            </a>
          </li>

          <li>
            <span>Go to</span>
            <a
              href="https://twitter.com/"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Slack API Page </span>
            </a>
            and create new app by putting app name and development workspace and
            click Apps link.
          </li>

          <li>
            Click incoming Webhooks link from add features and functionality
            section
          </li>

          <li>Toggle on to Active Incoming Webhooks</li>

          <li>
            Click Add New Webhooks to Workspace button and choose your channel
            to allow
          </li>

          <li>
            Your Webhook URL is prepared, just copy your Webhook URL and paste
            on this forum.Also put your slack channel to get notifications.
          </li>

          <li>Your slack setup is done.</li>
        </ul>
      </div>
    </div>
  );
};

export default SlackIntegration;
