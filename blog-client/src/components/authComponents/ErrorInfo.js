import React from "react";

const ErrorInfo = (props) => {
  return (
    <div>
      
      
        <div className="alert alert-danger" role="alert">
          {props.errorMessage}
        </div>
    
    </div>
  );
};

export default ErrorInfo;
