import React from 'react';

function Label({ children, ...props }: any) {
 return <label {...props}>{children}</label>;
}

export default Label;
