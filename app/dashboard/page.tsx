"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../home.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalBox from '../components/modalBox';
import Navigation from '../components/navigation';
import "./dashboard.scss"
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { LogOut } from 'lucide-react';

export default function Home() {
    const [activeLink, setActiveLink] = useState(null);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({})
    const [showPage, setShowPage] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            let localUser = localStorage.getItem("user");
            if (!localUser) {
                router.push("/auth");
            } else {
                try {
                    const parsedUser = JSON.parse(localUser);
                    setUserDetails(parsedUser);
                    setShowPage(true);
                } catch (err) {
                    console.error("Invalid JSON in localStorage:", err);
                    router.push("/auth");
                }
            }
        }
    }, []);

    if (!showPage) {
        return (
            <>
                <div className="home-page">
                    <h1>Loading...</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="home-page">

                <div className="bg-animation"></div>


                <main className="main-content">
                    <h1 className="page-title">
                        Welcome <span>{userDetails?.name.title} {userDetails?.name.first} {userDetails?.name.last}</span>
                    </h1>
                    <Button style={{ color: "red", borderColor: "red" }} variant='outlined' onClick={() => { localStorage.removeItem("user"); router.push("/auth") }}> <LogOut /> Log Out</Button>
                    <Navigation />
                    <div className="user-details">

                        <img src={userDetails?.picture.medium} alt="" />
                        <p>Gender: {userDetails?.gender}</p>
                        <p>Age: {userDetails?.dob.age}</p>
                        <p>Location: {userDetails?.location.street.name}, {userDetails?.location.state}, {userDetails?.location.city}, {userDetails?.location.country}</p>
                    </div>
                </main>


                <button type='button' className='notification' onClick={handleOpen}>
                    click here if you want to know how I made this web application
                </button>
            </div>

            <ModalBox open={open} handleClose={handleClose} />
        </>
    );
}