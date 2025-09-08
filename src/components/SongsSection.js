import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import Carousel from "./Carousel";
import ItemCard from "./ItemCard";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error("Error fetching songs:", err));

    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then((res) =>
        setGenres([{ key: "All", label: "All" }, ...res.data])
      )
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <Box sx={{ my: 6, px: 2 }}>
      {/* Header */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
      >
        Songs
      </Typography>

      {/* Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          mb: 3,
          "& .MuiTabs-indicator": {
            backgroundColor: "#1db954", // Spotify green
            height: "3px",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            minWidth: "90px",
            color: "#b3b3b3",
          },
          "& .Mui-selected": {
            color: "#1db954 !important",
          },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      {/* Carousel of Filtered Songs */}
      <Carousel
        data={filteredSongs}
        renderItem={(song) => (
          <ItemCard
            key={song.id}
            image={song.image}
            title={song.title}
            count={song.likes}
            countLabel="Likes"
          />
        )}
      />
    </Box>
  );
};

export default SongsSection;
