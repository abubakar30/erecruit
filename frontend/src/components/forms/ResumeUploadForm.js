import React from "react";

const ResumeUpload = ({ formData, setFormData }) => {

const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Resume Upload</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Upload Resume (PDF only)</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-500 file:text-white hover:file:bg-rose-600 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
