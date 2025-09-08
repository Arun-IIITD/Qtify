import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";

const AlbumCard = ({ image, follows, title }) => {
  return (
    <Card
      sx={{
        width: 180,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "#181818",
        color: "white",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          bgcolor: "#282828",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ p: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {title}
          </Typography>
          <Chip
            label={`${follows} Follows`}
            size="small"
            sx={{
              fontSize: "0.7rem",
              height: "20px",
              borderRadius: "6px",
              bgcolor: "#1db954",
              color: "black",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
