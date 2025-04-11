import React, { useEffect, useRef, useState } from "react";
import extractCustomFields from "../utils/utils";

function AddStackForm({ onSubmit }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState("Template");
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    repository: "",
    chart: "",
  });

  const [argumentContent, setArgumentContent] = useState();

  const textareaRef = useRef(null);
  const [text, setText] = useState("");

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

  const field = extractCustomFields(text);

  const handleSaveYaml = () => {
    setArgumentContent(field);
    setActiveTab("Arguments");
  };

  const handleArgumentChange = (index, field, value) => {
    const updatedArguments = [...arguments];
    updatedArguments[index][field] = value;
    setArgumentContent(updatedArguments);
  };

  useEffect(() => {
    resizeTextarea(); // Resize on mount or text update
  }, [text]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white text-sm mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Stack name"
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 placeholder-gray-500 border border-gray-700"
        />
      </div>

      {/* dropdown */}

      <div>
        <label className="block text-white text-sm mb-2">Environment</label>
        <select
          name="usage"
          value={formData.usage}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 border border-gray-700 appearance-none"
        >
          <option value="">Select a type</option>
          <option value="GCP dev">GCP dev</option>
          <option value="GCP dev">GCP dev</option>
          <option value="GCP dev">GCP dev</option>
        </select>
      </div>

      {/* dropdown */}

      <div>
        <label className="block text-white text-sm mb-2">Template</label>
        <select
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 border border-gray-700 appearance-none"
        >
          <option value="">Select a cluster</option>
          <option value="demo-app">demo-app</option>
          <option value="demo-app">demo-app</option>
          <option value="demo-app">demo-app</option>
        </select>
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
          </div>

          <div className="w-full p-4 rounded bg-gray-800 text-gray-400 text-sm font-normal">
            {activeTab === "Template" && (
              <div className=" relative">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={handleChangeText}
                  className="bg-gray-800 w-full border-none resize-none overflow-y-auto max-h-40  focus:outline-none focus:ring-0"
                  rows={5}
                />
                <button
                  type="button"
                  onClick={() => handleSaveYaml()}
                  className="absolute bottom-3 right-3 bg-blue-500 text-white text-xs py-1 px-3 rounded hover:bg-blue-600 transition-colors"
                >
                  Save
                </button>
              </div>
            )}

            {activeTab === arguments && (
              <div className="text-sm">
                <div className="grid grid-cols-3 mb-2">
                  <div className="text-gray-300 pl-2">Name</div>
                  <div className="text-gray-300">Default</div>
                  <div className="text-gray-300">Required</div>
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
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-2 rounded-lg mt-4"
      >
        Create
      </button>
    </form>
  );
}

export default AddStackForm;
