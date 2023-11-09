import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useApi } from "../../api/index.js";
import { Photo } from "../Photo/index.jsx";

export function Photos() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const api = useApi();
  useEffect(() => {
    setLoading(true);
    api.photos
      .getAll()
      .then(setPhotos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!photos.length) {
    return "пусто";
  }

  return (
    <ul>
      {photos.map(({ albumId, id, thumbnailUrl, title, url }) => (
        <li key={id}>
          <Photo {...{ albumId, id, thumbnailUrl, title, url }} />
        </li>
      ))}
    </ul>
  );
}
