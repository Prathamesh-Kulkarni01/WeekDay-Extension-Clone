import {
  Box,
  Checkbox,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import Select from "./Select";
import { FILTER_FIELDS } from "../constants";

const Filters = ({ filter = {}, setFilter = () => {} }) => {
  const handleChange = (key, value) => {
    console.log(key, value);
    setFilter((prevFilter) => ({ ...prevFilter, [key]: value }));
  };

  return (
    <Stack m={2}>
      <Box display="flex" gap={2}>
        {FILTER_FIELDS.map(({ key, label, type, grouped, options = [] }) =>
          type === "text" ? (
            <TextField
              size="small"
              key={key}
              value={filter[key]}
              label={label}
            />
          ) : (
            <Select
              key={key}
              options={options}
              label={label}
              onChange={(value) => handleChange(key, value)}
              value={filter[key] || null}
              multiple={type === "multiselect"}
              groupBy={(option) => grouped && option.category}
            />
          )
        )}
      </Box>
      <Box display="flex" alignItems="center" fontSize="small" fontWeight={600}>
        <Checkbox
          size="small"
          checked={filter["referral"]}
          onChange={(e, value) => handleChange("referral", value)}
        />
        {"Show jobs with referrals available"}
      </Box>
    </Stack>
  );
};

export default Filters;
