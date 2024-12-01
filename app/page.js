"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  function FadingPictureMontage() {
    const images = [
      "/robotbuild.jpeg",
      "/robotbuild.jpeg",
      "/robotbuild.jpeg",
      "/robotbuild.jpeg",
      "/robotbuild.jpeg",
      "/robotbuild.jpeg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          width: "80vw", // Responsive width
          maxWidth: "500px", // Maximum width
          height: "60vh", // Responsive height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px", // Rounded corners
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // Subtle shadow
          background: "rgba(255,255,255,0.1)", // Slight background
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`pic ${index + 1}`}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures image covers entire box
              opacity: currentImageIndex === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              borderRadius: "16px", // Match parent's border radius
            }}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f4f4f4", // Light background
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#171410",
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

      {/* Fading Image Montage */}
      <FadingPictureMontage />

      {/* Content Below the Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100vh",
          width: "100vw",
          marginTop: "60px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title */}
        <Typography
          color="black"
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            position: "absolute",
            top: "90px",
            left: "150px",
            zIndex: 20,
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          INIT Project Build
        </Typography>

        {/* Description Box */}
        <Box
          sx={{
            position: "absolute",
            top: "150px", // Positioned below the title
            left: "100px",
            width: "400px", // Fixed width, adjust as needed
            minHeight: "325px", // Increase minimum height
            height: "auto",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent white
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "#333",
              lineHeight: "1.6",
              fontSize: "1rem",
            }}
          >
            INIT Project Build is an innovative robotics development initiative
            focused on creating cutting-edge robotic solutions. Our team
            combines advanced engineering with creative problem-solving to push
            the boundaries of robotic technology and design.e
          </Typography>

          <Button
            sx={{
              position: "absolute",
              top: "260px",
            }}
          >
            Traffic Light Model
          </Button>

          <Button
            sx={{
              position: "absolute",
              top: "260px",
              left:"240px"
            }}
          >
            Walking Robot
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
