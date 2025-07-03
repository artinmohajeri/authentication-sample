"use client"
import { useState } from 'react';
import Link from 'next/link';
import '../home.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalBox from '../components/modalBox';
import "./auth.scss"
import axios from 'axios';
import { LogInIcon } from "lucide-react"
import Navigation from '../components/navigation';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [activeLink, setActiveLink] = useState(null);
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [errorText, setErrorText] = useState("")
    const [successText, setSuccessText] = useState("")
    const [number, setNumber] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setErrorText("")
        setSuccessText("")
        if (!number) {
            setTimeout(() => { setErrorText("") }, 3000);
            setErrorText("phone number is a requierd feild!")
            return
        }
        if (!/^\d+$/.test(number)) {
            setErrorText("Only numbers are allowed!");
            setTimeout(() => setErrorText(""), 3000);
            return;
        }
        if (number.length > 11 || number.length < 11) {
            setTimeout(() => { setErrorText("") }, 3000);
            setErrorText("phone number must be 11 digits!")
            return
        }
        if (!number.startsWith("09")) {
            setErrorText("Phone number must start with 09!");
            setTimeout(() => setErrorText(""), 3000);
            return;
        }

        setIsLoading(true)
        axios.get("https://randomuser.me/api/?results=1&nat=us").then(res => {
            console.log(res.data.results[0])
            setSuccessText("Login successful 🥳🥳");
            setIsLoading(false)

            // store the data in local storage
            localStorage.setItem("user", JSON.stringify(res.data.results[0]))
            router.push("/dashboard")
            


            if (res.data.error) {
                setErrorText(res.data.error)
                setTimeout(() => setErrorText(""), 3000);
                return
            }
        }).catch(err => {
            setErrorText("something went wrong! 🥺")
            setTimeout(() => setErrorText(""), 3000);
            setIsLoading(false)
        })

    }

    return (
        <>
            <div className="home-page">
                <div className="bg-animation"></div>

                <main className="main-content">

                    <Navigation />

                    <div className='form-container'>
                        <form action="" onSubmit={handleLogin}>
                            <input type="tel" placeholder='eg: 09192278018' value={number} onChange={() => { setNumber(event?.target.value) }} />
                            <button type='submit'>
                                <LogInIcon style={{marginLeft:"-10px"}} /> &nbsp;
                                Login
                            </button>
                            {
                                isLoading && <div className="lds-dual-ring"></div>
                            }
                            {successText && <p className='success-text'>{successText}</p>}
                            {errorText && <p className='error-text'>{errorText}</p>}
                        </form>
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