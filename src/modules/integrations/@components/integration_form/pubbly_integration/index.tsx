import React from "react";

const PabblyIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Update Pabbly Credentials</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="text" className="input_label">
            Pabbly webhook url <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Pabbly webhook url"
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
            <span>
              Create a new Pabbly account or signin your existing Pabbly account
              by clicking
            </span>{" "}
            <a
              href="https://accounts.pabbly.com/login"
              className="text-secondary hover:text-primary font-medium transition-all"
            >
              <span> Pabbly SignIn </span>
            </a>
          </li>
          <li>Go to Pabbly Connect.</li>
          <li>Crete Workflow.</li>
          <li>Choose app webhook.</li>
          <li>Copy webhook url and update.</li>
        </ul>
      </div>
    </div>
  );
};

export default PabblyIntegration;
