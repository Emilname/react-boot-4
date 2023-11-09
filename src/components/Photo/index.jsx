import { Box } from "@mui/material";

export function Photo({ albumId, id, thumbnailUrl, title, url }) {
  return (
    <Box sx={{ display: "flex" }}>
      <a href={url} target="_blank">
        <img src={thumbnailUrl} />
      </a>
      <div>
        <div>id: {id}</div>
        <div>{title}</div>
        <div>albumId:{albumId}</div>
      </div>
    </Box>
  );
}
