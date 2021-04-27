import React from 'react';
import Div from '../display/Div';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
 return (
  <Div className="d-flex flex-column w-100 h-100">
   <Header className="w-100" />
   <main className="w-100">{children}</main>
   <Footer className="w-100" />
  </Div>
 );
}

export default Layout;
