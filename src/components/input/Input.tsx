import React from 'react';

function Input({ type = 'text', ...props }: any) {
 return <input type={type} className="form-control" {...props}></input>;
}

export default Input;
