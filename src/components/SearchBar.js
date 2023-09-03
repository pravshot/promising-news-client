import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ query, setQuery }) {
  return (
    <Container>
      <TextField
        id="search-bar"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        sx={{
          backgroundColor: "#403c3c",
          borderColor: "#fdcc0a",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "5px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          style: {
            color: "#ffffe4",
            fontSize: "18px",
            fontFamily: "Georgia",
            // fontWeight: "bold",
          },
        }}
      />
    </Container>
  );
}

export default SearchBar;
