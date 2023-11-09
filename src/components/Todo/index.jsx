import { Paper, Typography, styled } from "@mui/material";

const TodoRoot = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "completed",
})(({ completed }) => ({
  padding: 8,
  backgroundColor: completed ? "white" : "yellowgreen",
}));

export function Todo({ completed, id, title, userId }) {
  return (
    <TodoRoot completed={completed}>
      <Typography color="primary">{title}</Typography>
      <div>userId: {userId}</div>
      <div>id: {id}</div>
    </TodoRoot>
  );
}
