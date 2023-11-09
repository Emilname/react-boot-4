import { Avatar, Box, Typography } from "@mui/material";

export function User({ username, name }) {
  return (
    <Box sx={{ display: "flex", p: 1 }}>
      <Avatar>{username[0]}</Avatar>
      <Box>
        <Typography>{username}</Typography>
        <Typography color="secondary">{name}</Typography>
      </Box>
    </Box>
  );
}
