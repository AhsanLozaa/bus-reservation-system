import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log("At Home Page");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center text-white p-6 bg-opacity-80 backdrop-blur-md rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Welcome to the Bus Reservation System!
        </h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          Your journey starts here. Book your bus tickets today and travel with comfort and convenience.
        </p>
        <div className="mt-6">
          <a 
            href="/booking" 
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
