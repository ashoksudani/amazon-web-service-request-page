import React from 'react';

import 'components/loader.scss';

const Loader = function() {
  return (
    <div className="loader">
      <div className="fa-3x">
        <i className="fas fa-circle-notch fa-spin" />
      </div>
    </div>
  );
};

export default Loader;
