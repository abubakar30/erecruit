import React from "react";

const WorkExperience = ({ formData, setFormData }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Job Position</label>
          <input
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={(e) =>
              setFormData({ ...formData, jobPosition: e.target.value })
            }
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Years of Experience</label>
          <input
            type="number"
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={(e) =>
              setFormData({ ...formData, yearsExperience: e.target.value })
            }
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
