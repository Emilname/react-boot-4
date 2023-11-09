import { useEffect, useState } from "react";
import { useApi } from "../../api/index.js";
import { User } from "../User/index.jsx";
import { CircularProgress } from "@mui/material";

export function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const api = useApi();
  useEffect(() => {
    setLoading(true);
    api.users
      .getAll()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!users.length) {
    return "Пусто";
  }

  return (
    <ul>
      {users.map(({ id, username, name }) => (
        <li key={id}>
          <User username={username} name={name} />
        </li>
      ))}
    </ul>
  );
}
