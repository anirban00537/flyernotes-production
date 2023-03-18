import React from "react";

const NotfoundComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/not-found.svg" alt="Not Found" className="mb-5" width={190} />
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you requested could not be found.
      </p>
      <a href="/" className="btn btn-primary">
        Go Home
      </a>
    </div>
  );
};

export default NotfoundComponent;
