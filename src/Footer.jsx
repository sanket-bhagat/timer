import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <p className="footer-text">©Sanket Bhagat({props.year})</p>
    </div>
  );
}

export default Footer;
