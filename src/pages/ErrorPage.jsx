import React from 'react';
import errorimg from '../images/errorimage.png';

const ErrorPage = () => {
  return (
    <div className="errorpage flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-8">
      {/* Image Section */}
      <img 
        src={errorimg} 
        alt="Error image" 
        className="w-1/2 md:w-1/2 lg:w-1/3 mb-6" 
      />

      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
        Oops! Page Not Found
      </h1>

      {/* Description Section */}
      <h3 className="text-lg md:text-xl text-gray-700 mb-6">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. 
        Maecenas sagittis tortor at metus mollis.
      </h3>

      {/* Back to Home Button */}
      <a 
        href="/" 
        className="btn bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
      >
        Back to Home
      </a>
    </div>
  );
}

export default ErrorPage;
