import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1d2438",
  },
  "& label": {
    color: "#1d2438",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
