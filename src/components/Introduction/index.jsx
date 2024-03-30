import "./index.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Introduction() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "../../../public/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container">
      <div className="box_container">
        <p id="title" style={{ textAlign: "left" }}>
          Salem Alem! I’m Kanafina Dinara. I’m software developer and this is my
          portfolio.
        </p>
        <motion.div animate={{ x: 100 }}>
          <button className="button" onClick={handleClick}>
            Check out my CV
          </button>
        </motion.div>
      </div>
    </div>
  );
}
