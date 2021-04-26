import React from 'react';

function Form({ children, ...props }: any) {
 return <form {...props}>{children}</form>;
}

export default Form;
