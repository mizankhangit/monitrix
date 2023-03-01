import { Select } from "antd";
import React from "react";

const WebhookIntegration = () => {
  // select

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <h4 className="text-xl font-medium">Update Webhook Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="url" className="input_label">
            Webhook Url
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="url"
            placeholder="Webhook Url"
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
        <div className="mt-4">
          <label htmlFor="Token" className="input_label">
            Authentication Type
            <span className="text-danger">*</span>
          </label>

          <Select
            defaultValue="Token"
            id="Token"
            style={{ width: "100%" }}
            size="large"
            onChange={handleChange}
            options={[
              { value: "a", label: "a" },
              { value: "b", label: "b" },
              { value: "c", label: "c" },
            ]}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="token" className="input_label">
            Token
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="token"
            placeholder="Token"
            className="input_field"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="requestmethod" className="input_label">
            Request Method
            <span className="text-danger">*</span>
          </label>

          <Select
            defaultValue="GET"
            id="requestmethod"
            style={{ width: "100%" }}
            size="large"
            onChange={handleChange}
            options={[
              { value: "get", label: "GET" },
              { value: "post", label: "POST" },
              { value: "push", label: "PUSH" },
              { value: "delete", label: "DELETE" },
            ]}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="selectServices" className="input_label">
            Select Services
            <span className="text-danger">*</span>
          </label>

          <Select
            defaultValue="ALL"
            id=" selectServices"
            style={{ width: "100%" }}
            size="large"
            onChange={handleChange}
            options={[{ value: "all", label: "ALL" }]}
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
          <li>A valid webhook URL where you want to receive data.</li>
          <li>
            Authentication type is if your endpoint require some sort of
            authentication.
          </li>
          <li>Select valid request method (Only POST & GET is supported).</li>
          <li>
            Finally Select your services.You can set it to All or specific ones.
          </li>
          <li>Example data(JSON Object):</li>

          <img
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            alt="asd"
            className="mt-3"
          />
        </ul>
      </div>
    </div>
  );
};

export default WebhookIntegration;
