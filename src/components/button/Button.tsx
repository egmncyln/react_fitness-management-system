import React from 'react';
import cn from 'classnames';

function Button({ children, className, ...props }: any) {
 return (
  <button className={cn('shadow-sm', className)} {...props}>
   {children}
  </button>
 );
}

export default Button;
