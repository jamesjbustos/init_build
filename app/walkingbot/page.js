"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box
        component="header"
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#363330",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="Logo"
          sx={{
            height: "40px",
            width: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100vh",
          width: "100vw",
          marginTop: "60px",
          position: "relative",
          backgroundColor: "#ede2d1",
        }}
      >

        
      </Box>
    </Box>
  );
}
