// NavigationRail.tsx

import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import JobsDrawer from "./JobsDrawer";

import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as Logo } from "../icons/Logo.svg";
import { ReactComponent as Jobs } from "../icons/Work.svg";
import { ReactComponent as Dashboard } from "../icons/Dashboard.svg";
import { ReactComponent as Companies } from "../icons/Company Building.svg";
import { ReactComponent as Contacts } from "../icons/People.svg";
import { ReactComponent as Analytics } from "../icons/Performance Presentation Graph.svg";

const LogoIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 28 28" height="28px" width="28px">
    <Logo />
  </SvgIcon>
);

const JobsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <Jobs />
  </SvgIcon>
);

const DashboardIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <Dashboard />
  </SvgIcon>
);

const CompaniesIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <Companies />
  </SvgIcon>
);

const ContactsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <Contacts />
  </SvgIcon>
);

const AnalyticsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <Analytics />
  </SvgIcon>
);

type Anchor = "left";

const ACTION_STYLES = {
  maxWidth: "64px",
  minWidth: "64px",
  minHeight: "64px",
  maxHeight: "64px",
  padding: "0px",
};

const NavigationRail = () => {
  const [value, setValue] = useState("");

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      const isClosing = state[anchor] && open === false;
      if (isClosing) {
        setValue("");
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <BottomNavigation
        value={value}
        role="navigation"
        arial-label="main navigation"
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log("newValue", newValue);
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          top: 0,
          backgroundColor: value ? "#FAFAFA" : "transparent",
          width: "64px",
          height: "unset",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "8px 0px",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <BottomNavigationAction
          aria-label="Expand Logo Section"
          LinkComponent={"a"}
          icon={<LogoIcon />}
          sx={ACTION_STYLES}
        />
        <BottomNavigationAction
          aria-label="Expand Dashboard Section"
          sx={ACTION_STYLES}
          icon={<DashboardIcon />}
        />
        <BottomNavigationAction
          aria-label="Expand Jobs Section"
          onClick={toggleDrawer("left", true)}
          icon={<JobsIcon />}
          sx={ACTION_STYLES}
        />
        <BottomNavigationAction
          aria-label="Expand Companies Section"
          icon={<CompaniesIcon />}
          sx={ACTION_STYLES}
        />
        <BottomNavigationAction
          aria-label="Expand Contacts Section"
          icon={<ContactsIcon />}
          sx={ACTION_STYLES}
        />
        <BottomNavigationAction
          aria-label="Expand Analytics Section"
          icon={<AnalyticsIcon />}
          sx={ACTION_STYLES}
        />
      </BottomNavigation>
      <JobsDrawer open={state.left} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavigationRail;
