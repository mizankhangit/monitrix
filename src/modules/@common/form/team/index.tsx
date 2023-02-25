import Table, { ColumnsType } from "antd/es/table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FiUsers } from "react-icons/fi";
import { Checkbox, Drawer, Select, Tooltip } from "antd";
import { HiPlus } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const FormTeam = () => {
  // checkbox

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <form>
        <div className="mb-4">
          <label htmlFor="fName" className="input_label">
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            placeholder="Enter First Name"
            className="input_field"
          />
          <div className="error">This field is required</div>
        </div>

        <div className="mb-4">
          <label htmlFor="lName" className="input_label">
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="lName"
            id="lName"
            placeholder="Enter Last Name"
            className="input_field"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="input_label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="input_field"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="input_label">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input_field"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="input_label">
            Confirm Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="input_field"
          />
        </div>
        <div className="flex justify-start items-center gap-2">
          <span className="font-medium text-sm">Permissions</span>
          <Tooltip
            placement="rightBottom"
            title={
              "By Providing Permission(s) you're allowing your team to perform these operations"
            }
          >
            <AiOutlineInfoCircle className="text-lg cursor-pointer" />
          </Tooltip>
        </div>
        <div className="mt-2">
          <Checkbox onChange={onChange}>Add</Checkbox>
          <Checkbox onChange={onChange}>Edit</Checkbox>
          <Checkbox onChange={onChange}>Delete</Checkbox>
        </div>
        <div className="flex justify-end gap-4 mt-5">
          <button type="button" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTeam;
