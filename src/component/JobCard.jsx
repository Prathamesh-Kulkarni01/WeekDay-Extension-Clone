import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 360,
    p: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "gray",
  },
  company: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
  },
  location: {
    fontSize: 12,
    fontWeight: 400,
    color: "#000000",
  },
  salary: {
    fontSize: 14,
    fontWeight: 400,
    color: "grey",
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 0,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#2087DC",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    padding: 8,
    borderRadius: 4,
  },
  easyApply: {
    fontSize: 12,
    fontWeight: 400,
    color: "#2087DC",
  },
}));

function JobCard({ job }) {
  const classes = useStyles();
  const {
    logoUrl,
    companyName,
    jobRole,
    jobDetailsFromCompany,
    location,
    maxJdSalary,
    minJdSalary = 0,
    minExp,
    salaryCurrencyCode,
    jdLink,
  } = job;
  console.log({ job });
  return (
    <Card
      sx={{
        textAlign: "start",
        boxShadow: 3,
        borderRadius: 6,
        bgcolor: "white",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
      className={classes.card}
    >
      <CardContent px={4} py={4}>
        <Box display="flex" justifyContent="space-between" gap={1}>
          <Chip
            size="small"
            sx={{
              fontSize: 10,
              backgroundColor: "white",
              border: "0.08px solid lightgray",
            }}
            label="⏳ Posted 17 days ago"
          />
          <Chip
            size="small"
            sx={{
              fontSize: 10,
              backgroundColor: "white",
              border: "0.08px solid lightgray",
            }}
            label=" 📈4 applicants"
          />
          {/* <Box
            justifySelf="end"
            height={50}
            width={50}
            border={1}
            borderRadius={50}
          ></Box> */}
        </Box>

        <Box display="flex" mt={3} gap={1}>
          <Avatar
            variant="square"
            alt="company logo"
            src={logoUrl || "./logo192.png"}
          />
          <Stack alignItems="flex-start">
            <Typography variant="h6" component="h3" className={classes.title}>
              {companyName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.company}
            >
              {jobRole}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.location}
            >
              {location}
            </Typography>
          </Stack>
        </Box>
        <Typography variant="body2" component="p" className={classes.salary}>
          Estimated Salary: {salaryCurrencyCode}
          {minJdSalary} - {maxJdSalary} LPA ⚠️
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="black"
          fontSize={16}
          mb={0}
          mt={1}
          fontWeight={550}
        >
          About Company:
        </Typography>
        <Box position="relative">
          <Typography
            variant="body2"
            component="p"
            sx={{
              position: "relative",
              zIndex: 444,
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 2,
                left: 0,
                width: "100%",
                height: "50%",
                background: "linear-gradient(to bottom, transparent, white)",
                opacity: 1,
                transition: "opacity 0.5s ease-in-out",
              },
            }}
          >
            {jobDetailsFromCompany?.substring(0, 400)}
          </Typography>
          <Typography
            textAlign="center"
            fontSize={15}
            mt={-1}
            color=" #4943da;"
          >
            {jobDetailsFromCompany.length < 500 ? "View Job" : "Show More"}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="p"
          color="grey"
          mt={2}
          fontWeight={550}
        >
          Minimum Experience
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="black"
          mb={2}
          fontWeight={400}
        >
          {minExp} years
        </Typography>
        <Stack gap>
          <a
            href={jdLink}
            style={{
              display: "flex",
              backgroundColor: "rgb(85, 239, 196)",
              color: "rgb(0, 0, 0)",
              fontWeight: 550,
              borderRadius: "6px",
              justifyContent: "center",
              fontSize: "16px",
              padding: "12px",
              textDecoration: "none",
            }}
          >
            ⚡ Easy Apply
          </a>
          <Box
            display="flex"
            sx={{
              backgroundColor: "rgb(73, 67, 218);",
              fontWeight: 550,
              borderRadius: 2,
              justifyContent: "center",
              fontSize: 16,
              padding: "12px",
              alignItems: "center",
            }}
            color="white"
            gap
          >
            <Avatar
              sx={{
                width: 20,
                height: 20,
                borderColor: "lightgray",
                border: "0.01px solid",
                padding: "2px",
              }}
              variant="circular"
              src="./logo192.png"
            />
            Ask for referral
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default JobCard;
