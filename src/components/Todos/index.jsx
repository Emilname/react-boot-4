import { useEffect, useState } from "react";
import { CircularProgress, styled } from "@mui/material";
import { useApi } from "../../api/index.js";
import { Todo } from "../Todo/index.jsx";

const List = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export function Todos() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const api = useApi();
  useEffect(() => {
    setLoading(true);
    api.todos
      .getAll()
      .then(setTodos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!todos.length) {
    return "пусто";
  }

  return (
    <List>
      {todos.map(({ completed, id, title, userId }) => (
        <li key={id}>
          <Todo {...{ completed, id, title, userId }} />
        </li>
      ))}
    </List>
  );
}
