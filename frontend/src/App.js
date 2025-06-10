import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SuccessPage from './components/forms/SuccessPage';
import MultiStepForm from './components/forms/MultiStepForm';
import ApplicationList from './components/forms/ApplicationList';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">eRecruit Application</h1>
          {/* Add links or buttons here if needed */}
        </div>
      </nav>

      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/applications" element={<ApplicationList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
