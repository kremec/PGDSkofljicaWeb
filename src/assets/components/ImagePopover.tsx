import {useState} from "react";
import {Box, Dialog, DialogTitle} from "@mui/material";

interface Props {
    src: string;
    alt: string;
    width: string;
}

const ImagePopover = ({src, alt, width}: Props) => {
    const handleOpen = () => {
        setOpenPopover(true)
    };
    const handleClose = () => {
        setOpenPopover(false)
    };

    const [openPopover, setOpenPopover] = useState(false);

    return (
        <>
            <Box
                width={width}
                component="img"
                alt={alt}
                src={src}
                onClick={handleOpen}
            />
            <Dialog
                fullWidth={true}
                maxWidth={false}
                open={openPopover}
                onClose={handleClose}
                onClick={handleClose}
            >
                <DialogTitle>{alt}</DialogTitle>
                <Box
                    component="img"
                    alt={alt}
                    src={src}
                    width={"100%"}
                />
            </Dialog>
        </>
    );
};

export default ImagePopover;
