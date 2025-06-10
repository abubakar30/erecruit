import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/applications")
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Submitted Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-500">No applications found.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Full Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Qualification</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Job Position</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Resume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2">{app.full_name}</td>
                <td className="px-4 py-2">{app.qualification}</td>
                <td className="px-4 py-2">{app.job_position}</td>
                <td className="px-4 py-2">
                  {app.resume_path ? (
                    <a
                      href={`http://localhost:5000/uploads/${app.resume_path}`}
                      className="text-rose-500 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationList;