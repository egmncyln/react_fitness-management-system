import React from 'react';
import Div from '../display/Div';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
 return (
  <Div className="d-flex flex-column w-100 h-100">
   <Header className="d-flex w-100 p-3" />
   <main className="w-100 flex-grow-1 p-3">{children}</main>
   <Footer className="w-100 p-3" />
  </Div>
 );
}

export default Layout;
