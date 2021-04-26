import React from 'react';

function Div({ children, ...props }: any) {
 return <div {...props}>{children}</div>;
}

export default Div;
