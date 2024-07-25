import { useState } from "react";

import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface CustomSelectProps {
  label: string;
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const CustomSelect = ({ label, items, onChange }: CustomSelectProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
    onChange(value);
  };

  return (
    <Box width={{ xs: "100%", sm: "150px" }}>
      <FormControl fullWidth>
        <InputLabel id="custom-select">{label}</InputLabel>
        <Select
          id="custom-select"
          label={label}
          value={value}
          onChange={handleChange}
        >
          {items.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
