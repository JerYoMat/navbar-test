import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NavigationRail from "./components/NavigationRail";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <>
    <CssBaseline />
    <div style={{ position: "relative" }}>
      <NavigationRail />
      
      <Container sx={{marginLeft: '64px'}}>
        <Typography variant="h2" component="h1"> Content Placeholder</Typography>
        <div style={{marginTop: '24px'}}>
        Current Path: {window.location.pathname}
        </div>
        </Container>
    </div>
    </>
  );
}
