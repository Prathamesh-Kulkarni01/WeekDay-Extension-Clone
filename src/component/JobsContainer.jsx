import React from "react";
import JobCard from "./JobCard";
import { Box, Grid } from "@mui/material";

const JobsContainer = ({ jobs = [] }) => {
  console.log(jobs);
  return (
    <Grid mx={10} container spacing={2} justifyContent="center">
      {jobs.map((item) => (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item.id}>
          <JobCard job={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobsContainer;
