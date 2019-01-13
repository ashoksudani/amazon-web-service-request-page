import React from 'react';
import { Link } from 'react-router-dom';

import 'components/app-header.scss';

const AppHeader = function() {
  return (
    <div className="row">
      <div className="col-12">
        <header className="app-header">
          <h1 className="sr-only">Air Base</h1>
          <Link to="/" />
        </header>
      </div>
    </div>
  );
};

export default AppHeader;
