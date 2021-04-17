import React, { FormEvent, Fragment, useState, MouseEvent } from 'react';
import Button from '../../../components/button/Button';
import Label from '../../../components/display/Label';
import InputWithLabel from '../../../components/input/InputWithLabel';
import { PageTypes } from '../enums/page-types.enum';

function Auth() {
 let [pageType, setPageType] = useState(PageTypes.Login);

 const onSubmit = (e: FormEvent) => {
  e.preventDefault();
 };

 return (
  <div className="d-flex justify-content-center align-items-center w-100 h-100">
   <form
    className="border rounded w-50 p-5"
    onSubmit={(e: FormEvent) => onSubmit(e)}>
    {pageType === PageTypes.Signup && (
     <Fragment>
      <div className="mb-3">
       <InputWithLabel htmlFor="name" labelText="Name" />
      </div>
      <div className="mb-3">
       <InputWithLabel htmlFor="surname" labelText="Surname" />
      </div>
     </Fragment>
    )}
    <div className="mb-3">
     <InputWithLabel htmlFor="username" labelText="Username" />
    </div>
    <div className="mb-4">
     <InputWithLabel htmlFor="password" labelText="Password" type="password" />
    </div>
    <Button className="btn btn-primary w-100 mb-3">
     {pageType === PageTypes.Login ? 'Login' : 'Sign Up'}
    </Button>
    <Label className="d-block text-center">
     {pageType === PageTypes.Login ? (
      <Fragment>
       Don't have an account?{' '}
       <a
        href="#"
        onClick={(e: MouseEvent) => {
         e.preventDefault();
         setPageType(PageTypes.Signup);
        }}>
        Signup
       </a>
      </Fragment>
     ) : (
      <Fragment>
       Have an account?{' '}
       <a
        href="#"
        onClick={(e: MouseEvent) => {
         e.preventDefault();
         setPageType(PageTypes.Login);
        }}>
        Login
       </a>
      </Fragment>
     )}
    </Label>
   </form>
  </div>
 );
}

export default Auth;
