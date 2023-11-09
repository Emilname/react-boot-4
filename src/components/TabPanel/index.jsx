import { Box, Typography } from "@mui/material";

export function TabPanel({ tabKey, value, children, ...props }) {
  const active = tabKey === value;
  return (
    <Box sx={{ overflow: "auto" }} hidden={!active} {...props}>
      {active && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}
