import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
