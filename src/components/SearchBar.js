import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBar.module.css";

function SearchBar({ query, setQuery }) {
  return (
    <div className={style.searchBarContainer}>
      <TextField
        id="search-bar"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        color="success"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="success" />
            </InputAdornment>
          ),
          style: {
            fontSize: "1em",
            height: "40px",
            backgroundColor: "#fff",
          },
        }}
        sx={{
          width: "40vw",
        }}
      />
    </div>
  );
}

export default SearchBar;
