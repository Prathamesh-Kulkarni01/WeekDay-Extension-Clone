import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
}));

const GroupItems = styled("ul")({
  padding: 0,
});

export default function Select({
  options = [],
  label = "",
  value = [],
  multiple = false,
  onChange = () => {},
  ...rest
}) {
  return (
    <Autocomplete
      options={options}
      value={value ?? (multiple ? [] : "")}
      autoComplete
      size="small"
      multiple={multiple}
      onChange={(event, newValue) => {
        if (!multiple) {
          newValue = newValue ? newValue : "";
        }
        onChange(newValue);
      }}
      getOptionLabel={(option) => (option.label ? option.label : option ?? "")}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      {...rest}
    />
  );
}
