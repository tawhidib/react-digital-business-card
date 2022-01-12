import React from "react";

function Info() {
  return (
    <div>
      <h4 className="name">Md Towhidul Islam</h4>
      <h5 className="designation">Frontend Developer</h5>
      <h6 className="personal-web">tawhidib.me</h6>
      <div className="d-flex">
        <button className="btn email">
          <i class="fas fa-envelope"></i>
          Email
        </button>
        <button className="btn twitter">
          <i class="fas fa-envelope"></i>
          Twitter
        </button>
      </div>
    </div>
  );
}

export default Info;
