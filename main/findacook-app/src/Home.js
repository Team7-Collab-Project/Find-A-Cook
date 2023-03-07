import React from 'react';
import Navbar from './components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Welcome to Find A Cook!</h1>
        <p>Explore our recipes and find your new favorite dish.</p>
      </div>
    </>
  );
}

export default Home;