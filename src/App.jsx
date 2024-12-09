import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BreadCrumbs from './components/BreadCrumbs';
import Form from './components/Form';
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <BreadCrumbs />
      <Form />
    </>
  );
};

export default App;
