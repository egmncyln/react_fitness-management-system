import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
 const history = useHistory();

 const onLoginClicked = (e: MouseEvent) => {
  e.preventDefault();
  history.push('/home');
 };

 return (
  <div className="d-flex justify-content-center align-items-center w-100 h-100">
   <form className="border rounded w-50 p-5">
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
     onClick={(e: MouseEvent) => onLoginClicked(e)}>
     Login
    </button>
    <label className="d-block text-center">
     Don't have an account? <Link to="/signup">Sign up</Link>
    </label>
   </form>
  </div>
 );
}

export default Login;
