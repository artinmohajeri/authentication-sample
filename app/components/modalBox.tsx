"use client"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import React from 'react'

const ModalBox = ({ open, handleClose }) => {
    
    if (!open) return null;

    return (
        <Modal
            className='modal-parent'
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className="modal-box" >
                <h3 id="parent-modal-title">How I made this WebApp?</h3>
                <p id="parent-modal-description">
                    ⚫ I have used MUI (material ui) for component libraries<br />
                    ⚫ I have used Axios for API calls<br />
                    ⚫ I have used SCSS nested stylins<br />
                    ⚫ I have used App router for routing<br />
                    ⚫ I have used lucide-react for icons<br />
                </p>
            </Box>
        </Modal>
    )
}

export default ModalBox

