import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>

      
      <div >
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
      </div>

      {/* Feedback Button */}
      <Button
        variant="outlined"
        sx={{
          color: "#1db954",
          backgroundColor: "black",
          borderColor: "#1db954",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: "10px", // pill shape
          px: 3,                // horizontal padding
          flexShrink: 0,        // ✅ prevents shrinking
          "&:hover": {
            backgroundColor: "#1db954",
            color: "black",
            borderColor: "#1db954",
          },
        }}
      >
        Give Feedback
      </Button>
    </nav>
  );
}

export default Navbar;
