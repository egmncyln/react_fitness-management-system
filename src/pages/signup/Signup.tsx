import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Label from '../../components/display/Label';
import InputWithLabel from '../../components/input/InputWithLabel';
import styles from './Signup.module.scss';

function Signup() {
 const onSignupClicked = (e: MouseEvent) => {
  e.preventDefault();
 };
 return (
  <div className="d-flex justify-content-center align-items-center w-100 h-100">
   <form className="border rounded w-50 p-5">
    <div className="mb-3">
     <InputWithLabel htmlFor="name" labelText="Name" />
    </div>
    <div className="mb-3">
     <InputWithLabel htmlFor="surname" labelText="Surname" />
    </div>
    <div className="mb-3">
     <InputWithLabel htmlFor="username" labelText="Username" />
    </div>
    <div className="mb-4">
     <InputWithLabel htmlFor="password" labelText="Password" type="password" />
    </div>
    <Button
     className="btn btn-primary w-100 mb-3"
     onClick={(e: MouseEvent) => onSignupClicked(e)}>
     Sign Up
    </Button>
    <Label className="d-block text-center">
     Have an account? <Link to="/">Login</Link>
    </Label>
   </form>
  </div>
 );
}

export default Signup;
