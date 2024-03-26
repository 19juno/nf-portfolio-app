import "./index.css";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container"
    >
      <div id="box">
        <p id="title">Projects I've worked on</p>
        <div id="projects"></div>
        <div id="projects"></div>
        <div id="projects"></div>
      </div>
    </motion.div>
  );
}
