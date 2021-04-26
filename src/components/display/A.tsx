import React from 'react';

function A({ children, ...props }: any) {
 return <a {...props}>{children}</a>;
}

export default A;
