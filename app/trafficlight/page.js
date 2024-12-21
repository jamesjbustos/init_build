"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import analysisContent from '@/public/traffic.md';
import rehypeRaw from 'rehype-raw'


export default function Home() {
  const markdown = analysisContent;

  console.log(markdown);

  return (
    <Box sx={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
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
          paddingX: 2,
        }}
      >
        <Box
          component="a"
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none"
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
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "calc(100vh - 60px)",
          width: "100vw",
          marginTop: "60px",
          position: "relative",
          backgroundColor: "#ede2d1",
          overflowY: "auto",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: "72rem",
            width: "100%",
            margin: "0 auto", 
            padding: { xs: "1rem", sm: "2rem" }, 
          }}
        >
          <Typography variant="body1" component="div" sx={{ color: "#333" }}>
            <Box className="markdown">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  hr: ({ node, ...props }) => (
                    <Box
                      component="hr"
                      sx={{
                        margin: "2rem 0", 
                        border: "none",
                        borderTop: "1px solid #d5cbbc", 
                      }}
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      style={{
                        color: "black", 
                        textDecoration: "underline", 
                      }}
                    />
                  ),
                  div: ({ node, ...props }) => (
                    <div {...props} />
                  ),
                  h1: ({ node, ...props }) => (
                    <Typography
                      variant="h4"
                      component="h1"
                      gutterBottom
                      sx={{ fontWeight: "bold", marginTop: 4, color: "#363330" }}
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: "bold", marginTop: 3, color: "#363330" }}
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: "medium", marginTop: 3, color: "#363330" }}
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ lineHeight: 1.7, color: "#333" }}
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul style={{ paddingLeft: "1.5rem", marginLeft: "0" }} {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol style={{ paddingLeft: "1.5rem", marginLeft: "0" }} {...props} />
                  ),
                  li: ({ node, ordered, ...props }) => (
                    <li style={{ marginBottom: "0.5em", color: "#333" }}>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{ lineHeight: 1.7 }}
                        {...props}
                      />
                    </li>
                  ),
                  code: ({ node, inline, className, children, ...props }) => (
                    <Box
                      component="code"
                      sx={{
                        display: "inline-block",
                        backgroundColor: "#f0e7d8",
                        padding: "0.2em 0.4em",
                        borderRadius: "4px",
                        fontFamily: "Inter",
                        fontSize: "0.9em",
                        color: "#333",
                        overflowX: "auto",
                      }}
                      {...props}
                    >
                      {children}
                    </Box>
                  ),
                  pre: ({ node, ...props }) => (
                    <Box
                      component="pre"
                      sx={{
                        backgroundColor: "#f0e7d8",
                        padding: "1em",
                        borderRadius: "4px",
                        overflowX: "auto",
                        fontFamily: "Monaco, Courier, monospace",
                        fontSize: "0.9em",
                        lineHeight: 1.6,
                        color: "#333",
                        marginY: 2,
                      }}
                      {...props}
                    />
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
