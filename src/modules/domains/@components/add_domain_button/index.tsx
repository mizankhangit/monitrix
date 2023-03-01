import { Drawer, Modal, Select } from "antd";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const AddDomainButton = () => {
  // Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  // Input Field for workspace
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={showDrawer}>
        <span>Add Domain</span>
      </button>
      <Drawer
        title="Domain"
        className="custom_drawer"
        placement={"right"}
        width={700}
        onClose={closeDrawer}
        open={open}
      >
        <div>
          <h4 className="font-medium text-base">Domain Information</h4>
          <div className="mt-5">
            <div className="mb-4">
              <label htmlFor="title" className="input_label">
                Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="input_field"
              />
              <div className="error">This field is required</div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="mb-4">
                <label htmlFor="domains" className="input_label">
                  Domains <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="domains"
                  id="domains"
                  placeholder="https://www.my-website.com"
                  className="input_field"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="input_label ">
                  Workspace <span className="text-danger">*</span>
                </label>

                <Select
                  defaultValue="Select workspace"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  size="large"
                  options={[
                    { value: "workspace1", label: "Workspace 1" },
                    { value: "workspace2", label: "Workspace 2" },
                    { value: "workspace3", label: "Workspace 3" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Adjust Alert */}
          <div>
            <h4 className="font-medium text-base mt-2">Adjust Alert</h4>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="mb-4">
                <label htmlFor="domains" className="input_label">
                  Alert Before Expiration (Days)
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="domains"
                  id="domains"
                  placeholder="example: 20"
                  className="input_field"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="frequency" className="input_label ">
                  Frequency <span className="text-danger">*</span>
                </label>

                <Select
                  defaultValue="Select Frequency"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  size="large"
                  options={[
                    { value: "daily", label: "Daily" },
                    { value: "twodays", label: "Two Days" },
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="country" className="input_label ">
                    Team Member
                  </label>
                  <button
                    type="button"
                    onClick={showModal}
                    className="flex text-sm justify-center items-center gap-1 text-blue-600 font-medium hover:text-primary hover:transition-all"
                  >
                    <HiPlus />
                    <span>Add New</span>
                  </button>
                </div>

                <Select
                  defaultValue="Add Team Member"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  size="large"
                  options={[
                    { value: "mizan", label: "Mizan" },
                    { value: "mokter", label: "Mokter" },
                    { value: "mokter2", label: "Mokter 2" },
                  ]}
                />
                <div className="mt-1 text-grey text-xs">
                  Only verified team members is displayed.
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-5">
              <button
                onClick={closeDrawer}
                type="button"
                className="btn btn-white"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Drawer>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default AddDomainButton;
