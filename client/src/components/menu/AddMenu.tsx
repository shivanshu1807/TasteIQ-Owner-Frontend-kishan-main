import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddMenu = () => {
  return (
    <div className="h-full bg-background rounded-xl flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-6 items-center px-10 py-10">
          <h1 className="text-md text-start w-full">Add Menu</h1>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Upload or drag and drop</span>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <Input placeholder="Menu Name" className="w-full" type="text" />
          <Button className="w-full">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
