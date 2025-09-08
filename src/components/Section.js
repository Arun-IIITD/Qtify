import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";

const Section = ({ title, fetchUrl, testId }) => {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false); // clearer name

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.error("Error fetching albums:", err);
      });
  }, [fetchUrl]);

  return (
    <Box sx={{ my: 6, px: 2 }} data-testid={testId}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
          {title}
        </Typography>
        <Button
          variant="text"
          size="small"
          onClick={() => setExpanded(!expanded)}
          sx={{
            color: "#1db954",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {expanded ? "Collapse" : "Show All"}
        </Button>
      </Box>

      {/* Conditional Rendering */}
      {expanded ? (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </Box>
      ) : (
        <Carousel
          data={albums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      )}
    </Box>
  );
};

export default Section;
