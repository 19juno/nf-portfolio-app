import "./index.css";
import { Button } from "@mui/material";

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
      <div className="">
        <p id="title">Hi, I’m Kanafina Dinara, I build things for the web </p>
        <p id="description">I’m software developer and this is my portfolio.</p>

        <Button variant="contained" onClick={handleClick}>
          Check out my CV
        </Button>
      </div>
    </div>
  );
}
