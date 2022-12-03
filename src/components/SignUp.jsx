import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";

const SignUp = (props) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h3> New User</h3>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Name" type="name" ref={nameRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Register</button>
          <span id="newUser" onClick={props.signInClick}>
            Already have an account? Click here
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
