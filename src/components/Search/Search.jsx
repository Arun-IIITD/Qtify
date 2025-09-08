import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../assets/searchIcon.png";   // ✅ fixed
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

// ✅ Custom Listbox with forwardRef (MUI v5 requirement)
const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 0px 0px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "auto",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData = [], placeholder = "Search" }) {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>   {/* ✅ no inline width here */}
      <Autocomplete
        options={searchData}
        getOptionLabel={(option) => option?.title || ""}
        onChange={(event, value) => {
          if (value) navigate(`/album/${value.slug}`);
        }}
        ListboxComponent={React.forwardRef(function CustomListbox(props, ref) {
          return <Listbox {...props} ref={ref} />;
        })}
        renderOption={(props, option) => {
          const artists =
            option?.songs?.reduce((acc, song) => {
              acc.push(...(song.artists || []));
              return acc;
            }, []) || [];

          return (
            <li {...props}>
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>
                  {truncate(artists.join(", "), 40)}
                </p>
              </div>
            </li>
          );
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              placeholder={placeholder}
              className={styles.search}
              required
              variant="outlined"
              sx={{ width: "100%" }}   // ✅ make TextField fill wrapper
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const inputValue = e.target.value?.trim();
                  if (inputValue) {
                    const selected = searchData.find(
                      (item) =>
                        item.title.toLowerCase() === inputValue.toLowerCase()
                    );
                    if (selected) navigate(`/album/${selected.slug}`);
                  }
                }
              }}
            />
            <button
              className={styles.searchButton}
              type="button"
              onClick={() => {
                const inputValue =
                  document.querySelector(`.${styles.search} input`)?.value;
                if (inputValue) {
                  const selected = searchData.find(
                    (item) =>
                      item.title.toLowerCase() === inputValue.toLowerCase()
                  );
                  if (selected) navigate(`/album/${selected.slug}`);
                }
              }}
            >
             
            </button>
          </>
        )}
      />
    </div>
  );
}

export default Search;
