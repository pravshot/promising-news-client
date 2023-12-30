import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBar.module.css";

function SearchBar({ query, setQuery }) {
  return (
    <div className={style.searchBarContainer}>
      <TextField
        fullWidth
        id="search-bar"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          style: {
            fontSize: "1em",
            height: "5.75vh",
          },
        }}
      />
    </div>
  );
}

export default SearchBar;
