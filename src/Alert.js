import React from "react";

function Alert({ type, messages }) {
  console.log(messages);
  return (
    <div className={`alert alert-${type}`} role="alert">
     
        <p className="mb-0 small" >
          {messages}
        </p>
     
    </div>
  );
}

Alert.defaultProps = {
  type: "danger",
  messages: ''
};

export default Alert;
