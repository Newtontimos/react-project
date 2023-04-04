import React from "react";

function ContactMe(props) {
  return (
    <div>
      <h1>My Staff</h1>
      <img src={props.myimage} alt="" />
      <p>NAME:{props.name}</p>
      <p>POST:{props.worker}</p>
    </div>
  );
}

export default ContactMe;
