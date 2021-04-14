import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/button/Button';
import Label from '../../components/display/Label';
import InputWithLabel from '../../components/input/InputWithLabel';
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
     <InputWithLabel htmlFor="username" labelText="Username" />
    </div>
    <div className="mb-4">
     <InputWithLabel htmlFor="password" labelText="Password" type="password" />
    </div>
    <Button
     className="btn btn-primary w-100 mb-3"
     onClick={(e: MouseEvent) => onLoginClicked(e)}>
     Login
    </Button>
    <Label className="d-block text-center">
     Don't have an account? <Link to="/signup">Sign up</Link>
    </Label>
   </form>
  </div>
 );
}

export default Login;
