'use client'

import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Home() {
  function FadingPictureMontage() {
    const images = [
      '/robotbuild.jpeg',
      '/traffic1.jpeg',
      '/robotbuild.jpeg',
      '/traffic1.jpeg',
      '/robotbuild.jpeg',
      '/traffic1.jpeg',
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)

      return () => clearInterval(intervalId)
    }, [])

    return (
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50vw' },
          height: { xs: '40vh', md: '60vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          background: 'rgba(255,255,255,0.1)',
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
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              borderRadius: '16px',
            }}
          />
        ))}
      </Box>
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#ede2d1', // Beige background throughout
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          width: '100%',
          height: '60px',
          backgroundColor: '#363330',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
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
            height: '40px',
            width: 'auto',
          }}
        />
      </Box>

      {/* Main Content Section (below header) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: 'calc(100vh - 60px)',
          pt: '60px', // leave space for header
          pb: '60px',
        }}
      >
        {/* Container holding left (text) and right (image) parts */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            width: '100%',
            maxWidth: '1200px',
            px: '20px',
            mx: 'auto',
          }}
        >
          {/* Left Side: Title & Description */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: { xs: '100%', md: '400px' },
              width: '100%',
            }}
          >
            <Typography
              color="#363330"
              variant="h4"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                mb: 2,
              }}
            >
              INIT AI Build
            </Typography>

            {/* Description Box */}
            <Box
              sx={{
                width: '100%',
                minHeight: '325px',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#333',
                  lineHeight: '1.6',
                  fontSize: '.9rem',
                  mb: 3,
                  fontWeight: '500',
                }}
              >
                Over the course of three months, we worked on two exciting AI
                projects that pushed the boundaries of innovation. The first was
                a traffic light AI model designed to improve traffic flow by
                intelligently managing light changes, reducing congestion, and
                enhancing overall efficiency on the road. The second project
                focused on training a robot to walk using AI. This involved
                building a system capable of autonomous movement, with realistic
                walking patterns and collision detection to navigate its
                environment seamlessly. Both projects challenged us to explore
                new techniques and sharpen our problem-solving skills.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center',
                  mt: 2, // margin-top to separate from text
                }}
              >
                <Button
                  href="/trafficlight"
                  variant="contained"
                  sx={{
                    backgroundColor: '#363330',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor: '#2c2824',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  Traffic Light Model
                </Button>

                <Button
                  href="/walkingbot"
                  variant="contained"
                  sx={{
                    backgroundColor: '#363330',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor: '#2c2824',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  Walking Robot
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Right Side: Fading Image Montage */}
          <FadingPictureMontage />
        </Box>
      </Box>
    </Box>
  )
}
