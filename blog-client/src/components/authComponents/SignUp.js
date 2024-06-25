import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import styles from "./Auth.module.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //error message

  // validation

  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  );

  return (
    <div className="container text-capitalize text-center my-2">
      <h1>Sign Up Here</h1>
      <h4>Signup to get started </h4>
{formError && (<div className="alert alert-danger mt-2" role="alert">
{formError}
</div>)}
      <div className="mt-3">
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              value={firstName}
              placeholder="Enter Firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              value={lastName}
              placeholder="Enter Lastname"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.auth_btn}${
                !formIsValid ? " disabled" : ""
              
              }`}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-2 d-flex flex-shrink-1 fw-bold gap-2">
            <p>
              Already have an account?{" "}
              <Link to="/get-started/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
