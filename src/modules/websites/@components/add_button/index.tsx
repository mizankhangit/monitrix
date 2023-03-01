import { Checkbox, Drawer, InputNumber, Modal, Select, Slider } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SliderMarks } from "antd/es/slider";
import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import FormTeam from "../../../@common/form/team";

const AddButton = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  //Slider

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  const marks: SliderMarks = {
    0: {
      style: {
        margin: "8px 0px",
      },
      label: <strong>0s</strong>,
    },

    120: {
      style: {
        margin: "8px 0px",
      },
      label: <strong>120s</strong>,
    },
    240: {
      style: {
        color: "#f50",
        margin: "8px 0px",
      },
      label: <strong>240s</strong>,
    },
  };

  // Input Field for workspace
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // checkbox

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={showDrawer}>
        <span>Add Website</span>
      </button>
      <Drawer
        title="Website"
        placement={"right"}
        contentWrapperStyle={{ maxWidth: "700px", width: "calc(100% - 20px)" }}
        onClose={closeDrawer}
        open={open}
      >
        <div>
          <h4 className="font-medium text-base">Website Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="input_label">
                  Website Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Website Name"
                  className="input_field"
                />
                <div className="error">This field is required</div>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="input_label">
                  URL <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="url"
                  id="name"
                  placeholder="https://www.my-website.com"
                  className="input_field"
                />
              </div>
              <div>
                <label htmlFor="name" className="input_label">
                  Search String
                </label>
                <input
                  type="text"
                  name="url"
                  id="name"
                  placeholder="Google Analytics Object"
                  className="input_field"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="country" className="input_label ">
                  Location <span className="text-danger">*</span>
                </label>

                <Select
                  defaultValue="Select Country"
                  style={{ width: "100%" }}
                  allowClear
                  size="large"
                  options={[
                    { value: "bangladesh", label: "Bangladesh" },
                    { value: "india", label: "India" },
                  ]}
                />
                <div className="error">This field is required</div>
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
              <div className="mb-4">
                <label htmlFor="country" className="input_label ">
                  Delay Duration <span className="text-danger">*</span>
                </label>

                <Select
                  defaultValue="5 min"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  size="large"
                  options={[
                    { value: "5min", label: "5 min" },
                    { value: "10min", label: "10 min" },
                    { value: "15min", label: "15 min" },
                  ]}
                />
              </div>
            </div>
          </div>
          <h4 className="font-medium text-base mt-2">Adjust Alert</h4>
          <div className="mt-5">
            <div>
              <h4 className="input_label">Load time is/or greater to</h4>
              <div className="mb-4 grid grid-cols-[1fr_auto] gap-6">
                <div>
                  <Slider
                    min={1}
                    max={240}
                    onChange={onChange}
                    marks={marks}
                    defaultValue={37}
                    value={typeof inputValue === "number" ? inputValue : 0}
                  />
                </div>
                <div>
                  <InputNumber
                    min={1}
                    max={240}
                    value={inputValue}
                    onChange={() => onChange()}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="Occurrences" className="input_label">
                Occurrences
              </label>
              <input
                type="text"
                name="Occurrences"
                id="occurrences"
                placeholder="Occurrences"
                className="input_field"
              />
            </div>
            <div className="mb-4">
              <Checkbox onChange={onCheckboxChange}>
                <span className="input_label">Search String Missing</span>
              </Checkbox>
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
      </Drawer>
      <Modal
        title={
          <div className="flex items-center gap-2 px-6 py-4 border-b">
            <FiUsers />
            <span>Add Team Member</span>
          </div>
        }
        open={isModalOpen}
        onOk={showModal}
        onCancel={closeModal}
        footer={false}
      >
        <div className="px-6 py-4">
          <FormTeam closeModal={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default AddButton;
