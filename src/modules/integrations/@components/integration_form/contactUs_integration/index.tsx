import React from "react";

const ContactUsIntegration = () => {
  return (
    <div>
      <h4 className="text-xl font-medium">Contact Us</h4>
      <form action="" className="mb-8">
        <div className="mt-4">
          <label htmlFor="Name" className="input_label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Name"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>
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
        </div>
        <div className="flex justify-end gap-4 mt-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsIntegration;
