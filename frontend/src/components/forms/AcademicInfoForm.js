import React from "react";

const AcademicInformation = ({ formData, setFormData }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Academic Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Highest Academic Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={(e) =>
              setFormData({ ...formData, qualification: e.target.value })
            }
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Result</label>
          <input
            type="text"
            name="result"
            value={formData.result}
            onChange={(e) =>
              setFormData({ ...formData, result: e.target.value })
            }
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicInformation;