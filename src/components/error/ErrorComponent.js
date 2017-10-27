'use strict';
import React from 'react';
require('styles/error/Error.less');

class ErrorComponent extends React.Component {
  render() {
    return (
      <div className="error-component">
        Please edit src/components/error//ErrorComponent.js to update this component!
      </div>
    );
  }
}

ErrorComponent.displayName = 'ErrorErrorComponent';

export default ErrorComponent;
