import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function DisabledTabs({ value, handleChange }) {
  return (
    <Tabs centered value={value} onChange={handleChange}>
      <Tab label="Applied jobs" />
      <Tab label="Search jobs" />
    </Tabs>
  );
}
