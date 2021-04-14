import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';

function Signup() {
 const onSignupClicked = (e: MouseEvent) => {
  e.preventDefault();
 };
 return (
  <div className="d-flex justify-content-center align-items-center w-100 h-100">
   <form className="border rounded w-50 p-5">
    <div className="mb-3">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input type="text" className="form-control" id="name" />
    </div>
    <div className="mb-3">
     <label htmlFor="surname" className="form-label">
      Surname
     </label>
     <input type="text" className="form-control" id="surname" />
    </div>
    <div className="mb-3">
     <label htmlFor="username" className="form-label">
      Username
     </label>
     <input type="text" className="form-control" id="username" />
    </div>
    <div className="mb-4">
     <label htmlFor="password" className="form-label">
      Password
     </label>
     <input type="password" className="form-control" id="password" />
    </div>
    <button
     className="btn btn-primary w-100 mb-3"
     onClick={(e: MouseEvent) => onSignupClicked(e)}>
     Sign Up
    </button>
    <label className="d-block text-center">
     Have an account? <Link to="/">Login</Link>
    </label>
   </form>
  </div>
 );
}

export default Signup;
