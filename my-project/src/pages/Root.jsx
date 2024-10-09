import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import Modal from '../UI/Modal';

export const Root = () => {
  return (
<>
<Navbar/>
<Modal/>
<main>
    <Outlet/>
</main>
<Footer/>
</>  )
}
