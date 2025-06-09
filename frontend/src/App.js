import React from 'react';
import MultiStepForm from './components/forms/MultiStepForm';

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
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
