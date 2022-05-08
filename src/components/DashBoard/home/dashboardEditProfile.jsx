import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pen from "../css/pen.png";
import styles from "../css/dashborad.module.css";
import clsx from "clsx";
import EditFormCard from './dashboardEditForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

export default function EditProfileModel() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <img
                    className={clsx(styles.edit_pen)}
                    src={pen}
                    alt="" />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Form
                        <hr/>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <EditFormCard/>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
