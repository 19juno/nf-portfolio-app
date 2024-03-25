import * as React from "react";
import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <p id="name">Kanafina Dinara</p>
      <div className="navbar">
        <Stack spacing={2} direction="row">
          <Link to="/about">
            <Button variant="text">About</Button>
          </Link>
          <Link to="/experience">
            <Button variant="text">Experience</Button>
          </Link>

          <Link to="/projects">
            <Button variant="text">Projects</Button>
          </Link>
          <Link to="/contacts">
            <Button variant="text">Contacts</Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
