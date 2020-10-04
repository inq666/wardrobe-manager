import React from 'react';
import Navbar from '../../components/navbar/Navbar';


const Layout: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
