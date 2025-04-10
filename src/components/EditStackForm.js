import React, { useState, useEffect, useRef } from "react";
import extractCustomFields from "../utils/utils";

function EditStackForm({ onSubmit, templatesData }) {
  console.log(templatesData, "data");

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState("Template");
  const [formData, setFormData] = useState({
    name: "",
    environment: "",
    template: "",
    releaseName: "",
  });

  const [argumentContent, setArgumentContent] = useState();
  const [portMappings, setPortMappings] = useState([
    { service: "app/frontend:8080", local: "" },
    { service: "app/backend:3333", local: "" },
  ]);

  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (templatesData) {
      setFormData({
        name: templatesData.name || "",
        environment: templatesData.environment || "",
        template: templatesData.template || "",
        releaseName: templatesData.releaseName || "",
      });
    }
  }, [templatesData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
    resizeTextarea();
  };

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = textarea.scrollHeight + "px"; // Set new height
    }
  };

  const handleArgumentChange = (index, field, value) => {
    const updatedArguments = [...arguments];
    updatedArguments[index][field] = value;
    setArgumentContent(updatedArguments);
  };

  const field = extractCustomFields(text);

  const handleSaveYaml = () => {
    setArgumentContent(field);
    setActiveTab("Arguments");
  };

  const handlePortMappingChange = (index, field, value) => {
    const updatedPortMappings = [...portMappings];
    updatedPortMappings[index][field] = value;
    setPortMappings(updatedPortMappings);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white text-sm mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=" name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>
      <div>
        <label className="block text-white text-sm mb-2">Environment</label>
        <input
          type="text"
          name="name"
          value={formData.environment}
          onChange={handleChange}
          placeholder="Source name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>
      <div>
        <label className="block text-white text-sm mb-2">Template</label>
        <input
          type="text"
          name="name"
          value={formData.template}
          onChange={handleChange}
          placeholder="Repository name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>
      <div>
        <label className="block text-white text-sm mb-2">Release name</label>
        <input
          type="text"
          name="name"
          value={formData.releaseName}
          onChange={handleChange}
          placeholder="Chart name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>

      <div className="flex justify-end items-center mb-6">
        <span className="mr-2">Advanced</span>
        <button
          type="button"
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
            showAdvanced ? "bg-indigo-600" : "bg-gray-700"
          }`}
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              showAdvanced ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {showAdvanced && (
        <div className="mb-6">
          <div className="flex space-x-2 mb-4">
            <button
              type="button"
              className={`px-4 py-1 ${
                activeTab === "Template"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Template")}
            >
              Template
            </button>
            <button
              type="button"
              className={`px-4 py-1 ${
                activeTab === "Arguments"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Arguments")}
            >
              Arguments
            </button>
            <button
              type="button"
              className={`px-4 py-1 ${
                activeTab === "Port Mappings"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Port Mappings")}
            >
              Port Mappings
            </button>
          </div>

          <div className="w-full p-4 rounded bg-gray-800 text-gray-400 text-sm font-normal">
            {activeTab === "Template" && (
              <div className=" relative">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={handleChangeText}
                  className="bg-gray-800 w-full border-none resize-none overflow-hidden  focus:outline-none focus:ring-0"
                  rows={1}
                />
                <button
                  type="button"
                  onClick={() => handleSaveYaml()}
                  className="absolute bottom-3 right-3 bg-blue-500 text-white text-xs py-1 px-3 rounded hover:bg-blue-600 transition-colors"
                >
                  Save
                </button>
              </div>
            )}{" "}
            {activeTab === "Arguments" && (
              <div className="text-sm">
                <div className="grid grid-cols-3 mb-2">
                  <div className="text-gray-300 pl-2">name</div>
                  <div className="text-gray-300">value</div>
                  {/* <div className="text-gray-300">required</div> */}
                </div>

                {argumentContent?.map((arg, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 mb-2 items-center"
                  >
                    <div className="text-gray-400 pl-2">{arg?.key}</div>
                    <div>
                      <input
                        type="text"
                        value={arg?.value}
                        onChange={(e) =>
                          handleArgumentChange(index, "default", e.target.value)
                        }
                        placeholder="Enter value"
                        className="w-32 p-1 text-xs rounded bg-gray-700 text-gray-300 border border-gray-600"
                      />
                    </div>
                    <div className="flex justify-center ">
                      <input
                        type="checkbox"
                        checked={arg.required}
                        onChange={(e) =>
                          handleArgumentChange(
                            index,
                            "required",
                            e.target.checked
                          )
                        }
                        className="h-4 w-4  "
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Port Mappings" && (
              <div>
                <div className="grid grid-cols-2 mb-3">
                  <div className="text-gray-400 pl-2">service port</div>
                  <div className="text-gray-400 pl-2">local port</div>
                </div>

                {portMappings.map((mapping, index) => (
                  <div key={index} className="grid grid-cols-2 mb-3">
                    <div className="pr-2">
                      <div className="relative">
                        <select
                          value={mapping.service}
                          onChange={(e) =>
                            handlePortMappingChange(
                              index,
                              "service",
                              e.target.value
                            )
                          }
                          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 appearance-none text-sm"
                        >
                          <option value="app/frontend:8080">
                            app/frontend:8080
                          </option>
                          <option value="app/backend:3333">
                            app/backend:3333
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={mapping.local}
                        onChange={(e) =>
                          handlePortMappingChange(
                            index,
                            "local",
                            e.target.value
                          )
                        }
                        placeholder="enter port"
                        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-2 rounded-lg mt-4"
      >
        Update
      </button>
    </form>
  );
}

export default EditStackForm;
