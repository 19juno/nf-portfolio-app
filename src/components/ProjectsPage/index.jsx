import { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import Modal from "./Modal.jsx";

const projects = [
  {
    image: "",
    name: "To-Do App",
    description: "",
    stacklist: ["React", "Javascript", "React-Router-Dom"],
  },
  {
    image: "",
    name: "Мои будущие пет-проекты",
    description: "",
    stacklist: ["React", "Javascript", "React-Router-Dom"],
  },
  {
    image: "",
    name: "Мои будущие пет-проекты",
    description: "",
    stacklist: ["React", "Javascript", "React-Router-Dom"],
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container4"
    >
      <p id="title">Projects</p>
      <Grid container spacing={1}>
        {projects.map((el, index) => (
          <Grid key={index} item xs={12} sm={8} md={4}>
            <Card sx={{ maxWidth: 300 }} elevation={5}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image=""
                  alt="project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleClickOpen}>
                  Show more
                </Button>
                {open && <Modal onClose={handleClose} open={open} el={el} />}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
