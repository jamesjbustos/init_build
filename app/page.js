"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function Home() {
  function FadingPictureMontage() {
    const images = [
      "/robotbuild.jpeg",
      "/traffic1.jpeg",
      "/robotbuild.jpeg",
      "/traffic1.jpeg",
      "/robotbuild.jpeg",
      "/traffic1.jpeg",
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
          zIndex: 1000,
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
              zIndex: 1000,
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

      {/* Fading Image Montage */}
      <FadingPictureMontage sx={{ zIndex: 1000 }} />

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
          backgroundColor: "#ede2d1",
        }}
      >
        {/* Title */}
        <Typography
          color="#363330"
          variant="h4"
          sx={{
            fontFamily: "Poppins, sans-serif",
            position: "absolute",
            top: "45px",
            left: "190px",
            zIndex: 20,
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          INIT AI Build
        </Typography>

        {/* Description Box */}
        <Box
          sx={{
            position: "absolute",
            top: "105px", // Positioned below the title
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
              fontSize: ".8rem",
            }}
          >
            Over the course of three months, we worked on two exciting AI projects that pushed the 
            boundaries of innovation. The first was a traffic light AI model designed to improve traffic flow by intelligently managing 
            light changes, reducing congestion, and enhancing overall efficiency on the road. The second project 
            focused on training a robot to walk using AI. This involved building a system capable of 
            autonomous movement, with realistic walking patterns and collision detection to navigate 
            its environment seamlessly. Both projects challenged us to explore new techniques and sharpen our problem-solving skills.
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "260px",
              left: "px", // Aligned with other content
              backgroundColor: "#363330", // Dark background to match header
              color: "white",
              fontFamily: "Poppins, sans-serif",
              textTransform: "none", // Prevents all-caps
              padding: "10px 20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)", // Subtle shadow
              "&:hover": {
                backgroundColor: "#2c2824", // Slightly lighter on hover
                transform: "scale(1.05)", // Slight scale effect
                transition: "transform 0.3s ease",
              },
            }}
          >
            Traffic Light Model
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "260px",
              left: "240px", // Positioned next to first button
              backgroundColor: "#363330",
              color: "white",
              fontFamily: "Poppins, sans-serif",
              textTransform: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#2c2824",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            Walking Robot
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
