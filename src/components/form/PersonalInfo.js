import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import uniqid from "uniqid";

const PersonalInfo = (props) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        id="first"
        name="first"
        placeholder="First Name"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="last"
        name="last"
        placeholder="Last Name"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="location"
        name="location"
        placeholder="City, State"
        onChange={props.onUpdate}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={props.onUpdate}
      />
      <input
        type="text"
        id="github"
        name="github"
        placeholder="GitHub"
        onChange={props.onUpdate}
      />
    </div>
  );
};

export default PersonalInfo;
