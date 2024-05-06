import React from "react";
import JobCard from "./JobCard";
import { Box, CircularProgress, Grid, Stack } from "@mui/material";

const JobsContainer = ({ jobs = [], loading }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          paddingLeft: "15%",
          paddingRight: "10%",
          minHeight: "85vh",
        }}
        mt={16}
        pb={2}
        container
        spacing={2}
        justifyContent="center"
      >
        {jobs.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item.jdUid}>
            <JobCard job={item} />
          </Grid>
        ))}
      </Grid>
      {loading && <CircularProgress />}
    </Box>
  );
};

export default JobsContainer;
