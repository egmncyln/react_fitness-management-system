import React, { FormEvent, Fragment, useState, MouseEvent } from 'react';
import Button from '../../../components/button/Button';
import Label from '../../../components/display/Label';
import InputWithLabel from '../../../components/input/InputWithLabel';
import { PageTypes } from '../enums/page-types.enum';
import styles from './Auth.module.scss';
import cn from 'classnames';
import { useHistory } from 'react-router';
import Form from '../../../components/display/Form';
import Div from '../../../components/display/Div';
import A from '../../../components/display/A';

function Auth() {
 let [pageType, setPageType] = useState(PageTypes.Login);
 const history = useHistory();

 const onSubmit = (e: FormEvent) => {
  e.preventDefault();
  history.push('home');
 };

 return (
  <Div className="d-flex justify-content-center align-items-center w-100 h-100">
   <Form
    className={cn(styles.form, 'border rounded w-50 p-5')}
    onSubmit={(e: FormEvent) => onSubmit(e)}>
    {pageType === PageTypes.Signup && (
     <Fragment>
      <Div className="mb-3">
       <InputWithLabel htmlFor="name" labelText="Name" />
      </Div>
      <Div className="mb-3">
       <InputWithLabel htmlFor="surname" labelText="Surname" />
      </Div>
     </Fragment>
    )}
    <Div className="mb-3">
     <InputWithLabel htmlFor="username" labelText="Username" />
    </Div>
    <Div className="mb-4">
     <InputWithLabel htmlFor="password" labelText="Password" type="password" />
    </Div>
    <Button className="btn btn-primary w-100 mb-3">
     {pageType === PageTypes.Login ? 'Login' : 'Sign Up'}
    </Button>
    <Label className="d-block text-center">
     {pageType === PageTypes.Login ? (
      <Fragment>
       Don't have an account ?{' '}
       <A
        href="#"
        onClick={(e: MouseEvent) => {
         e.preventDefault();
         setPageType(PageTypes.Signup);
        }}>
        Signup
       </A>
      </Fragment>
     ) : (
      <Fragment>
       Have an account ?{' '}
       <A
        href="#"
        onClick={(e: MouseEvent) => {
         e.preventDefault();
         setPageType(PageTypes.Login);
        }}>
        Login
       </A>
      </Fragment>
     )}
    </Label>
   </Form>
  </Div>
 );
}

export default Auth;
