import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0,0,0,0.12)',
  ],
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
