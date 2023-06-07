// JobsDrawer.tsx

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent as ChevronLeft } from "../icons/ChevronLeft.svg";

const ChevronLeftIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <ChevronLeft />
  </SvgIcon>
);

type Anchor = "top" | "left" | "bottom" | "right";

function JobsDrawer({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: any;
}) {
  const handleKeyboardSelect = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleDrawer("left", false);
    }
  };

  return (
    <div>
      <SwipeableDrawer
        id="jobs-drawer"
        hideBackdrop
        anchor={"left"}
        open={open}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        PaperProps={{
          elevation: 3,
        }}
        transitionDuration={0}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            borderLeft: "none",
            width: 256,
            left: 64,
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Demo Name
            </Typography>
            <IconButton
              onKeyDown={handleKeyboardSelect}
              aria-label="Close the Jobs section"
            >
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            aria-labelledby="jobs-list-subheader"
            subheader={
              <ListSubheader id="jobs-list-subheader">Jobs</ListSubheader>
            }
          >
            <ListItemButton component="a" href="/locationA">
              <ListItemText primary="Location A" />
            </ListItemButton>
            <ListItemButton component="a" href="/locationB">
              <ListItemText primary="Location B" />
            </ListItemButton>
          </List>
          <List
            aria-labelledby="jobs-list-recent-pages"
            subheader={
              <ListSubheader id="jobs-list-recent-pages">
                Recent Pages
              </ListSubheader>
            }
          >
            <ListItemButton component="a" href="/locationC">
              <ListItemText primary="Location C" />
            </ListItemButton>
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

export default JobsDrawer;
