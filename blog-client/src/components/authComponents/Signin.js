import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
const Signin = () => {
  return (
    <div className="container text-capitalize text-center">
      <h1>Sign In Here</h1>
      <h4>Signin to get started </h4>

      <form>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.auth_btn}`}
          >
            Signin
          </button>
        </div>

        <div className="mt-2 d-flex gap-4 text-capitalize fw-bold">
          <p>
            Don't have an account? <Link to="/get-started/signup">Sign Up</Link>
          </p>

          <p>
            Forgot Password?
            <Link to="/get-started/reset-password">Reset Password</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
