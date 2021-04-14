import React from 'react';
import Label from '../display/Label';
import Input from './Input';

function InputWithLabel({ htmlFor, labelText, ...props }: any) {
 return (
  <React.Fragment>
   <Label htmlFor={htmlFor} className="form-label">
    {labelText}
   </Label>
   <Input id={htmlFor} {...props} />
  </React.Fragment>
 );
}

export default InputWithLabel;
