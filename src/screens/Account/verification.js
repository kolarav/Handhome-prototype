import React from "react";
import "./verification.css";

export default function Verification() {
  return (
    <div className="verification-page">
      <div className="welcome">Welcome to Handome</div>
      <font>Your name</font>
      <input type="text" />
      <font>Mobile no</font>
      <input type="text" />
      <font>Verification code</font>
      <input type="text" />
      <button id="send_code">Send Code</button>
      <button id="verify_btn">Continue</button>
    </div>
  );
}
