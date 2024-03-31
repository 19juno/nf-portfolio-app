import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function ModalInput({ open, style, handleClose }) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required id="outlined-required" label="Name" />
          <TextField required id="outlined-required" label="e-mail" />
          <TextField
            id="outlined-read-only-input"
            label="Subject"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-read-only-input"
            label="Company"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField required id="outlined-required" label="Project Summary" />
          <Button onClick={handleClose}>Submit</Button>
        </Box>
      </Box>
    </Modal>
  );
}
