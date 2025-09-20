import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme } from "@mui/material/styles"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d946ef", // Romantic pink
      light: "#f3e8ff",
      dark: "#a21caf",
    },
    secondary: {
      main: "#06b6d4", // Soft blue
      light: "#e0f7fa",
      dark: "#0891b2",
    },
    background: {
      default: "#fefefe",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
