import React from 'react';
import cn from 'classnames';

function Form({ children, className, ...props }: any) {
 return (
  <form className={cn('shadow-sm', className)} {...props}>
   {children}
  </form>
 );
}

export default Form;
