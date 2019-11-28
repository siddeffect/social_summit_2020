import React from 'react';
import Navbar from './client/Layout/Navbar/Navbar';
import Footer from './client/Layout/Footer/Footer';
import CounterNumberUp from './client/Layout/Counter/CounterNumberUp';

function App() {
  return (
    <div>
      <Navbar />
      <CounterNumberUp />
      <Footer />
    </div>
  );
}

export default App;
