import React, { useState, useEffect } from "react";

function WelcomeNote({ onSubmit, templatesData }) {
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    repository: "",
  });

  useEffect(() => {
    if (templatesData) {
      setFormData({
        name: templatesData.name || "",
        source: templatesData.source || "",
        respository: templatesData.repository || "",
        chart: templatesData.chart || "",
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

  return (
    <div>
      <div className="text-center space-y-4 p-5">
        <h2 className="text-white text-2xl font-semibold">
          Welcome to Planeo!
        </h2>{" "}
        <p className="text-white text-md font-thin">
          Hydroplaning into production
        </p>
        <p className="text-white text-md font-thin">
          Planeo simplifies the experience of creating ephemeral environments
          using the power of AI
        </p>
        <p className="text-white text-md font-thin">
          Lets get started by connecting to some Kubernetes clusters and
          creating some environments
        </p>
      </div>
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
          <label className="block text-white text-sm mb-2">Context</label>
          <select
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            className="w-full bg-[#2C2E31] text-white rounded-lg px-4 py-2 border border-gray-700 appearance-none"
          >
            <option value="">Select a type</option>
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6366F1] hover:bg-[#5558E6] text-white py-2 rounded-lg mt-4"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}

export default WelcomeNote;
