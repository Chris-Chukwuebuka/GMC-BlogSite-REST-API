import React from 'react'
import styles from './Auth.module.css'
const ResetPassword = () => {
  return (
    <>
    <div className="container text-capitalize text-center my-2">
    < h1>Reset Password</h1>  
        <h4>Enter your email to reset password</h4>  
    </div>
     
        <form>
            <div className="form-group mb-3">
            <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
            />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.auth_btn} `}>
            Reset Password
            </button>
        </form>
    </>
  )
}

export default ResetPassword