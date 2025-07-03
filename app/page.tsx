"use client"
import { useState } from 'react';
import Link from 'next/link';
import './home.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalBox from './components/modalBox';
import Navigation from './components/navigation';

export default function Home() {
  const [activeLink, setActiveLink] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="home-page">
        <div className="bg-animation"></div>

        <main className="main-content">
          <h1 className="page-title">
            Welcome to <span>Website</span>
          </h1>

          <p className="page-subtitle">
            An authentication model created by Next.js
          </p>

          <Navigation />
        </main>

        <button type='button' className='notification' onClick={handleOpen}>
          click here if you want to know how I made this web application
        </button>
      </div>

      <ModalBox open={open} handleClose={handleClose} />
    </>
  );
}