import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import AcademicInfoForm from './AcademicInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import ResumeUploadForm from './ResumeUploadForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const steps = ['Personal', 'Academic', 'Work', 'Resume'];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    qualification: '',
    result: '',
    jobPosition: '',
    yearsExperience: '',
    resume: null,
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      await axios.post('http://localhost:5000/submit', data);
      alert('Form submitted!');
      navigate('/success');
    } catch (err) {
      alert('Error submitting form.');
    }
  };

  const currentForm = () => {
    switch (step) {
      case 0:
        return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <AcademicInfoForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <WorkExperienceForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <ResumeUploadForm formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentForm()}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex justify-between gap-4">
        {step > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            onClick={handleNext}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            onClick={handleSubmit}
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
        )}
      </div>

    </div>
  );
}