import { Select, MenuItem } from "@mui/material";

const dateOptions = {
  1: "Today",
  7: "This Week",
  30: "This Month",
  3650: "All Time",
};
function DateSelection({ date, setDate }) {
  return (
    <Select
      id="date-selection"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      label="Date"
      variant="outlined"
      sx={{
        fontFamily: "Georgia",
        fontWeight: "bold",
        backgroundColor: "#403c3c",
        borderColor: "#fdcc0a",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "#ffffe4",
        fontSize: "18px",
        height: "61px",
        minWidth: "170px",
        width: "auto",
      }}
    >
      {Object.keys(dateOptions).map((key) => (
        <MenuItem
          key={key}
          value={key}
          sx={{
            fontFamily: "Georgia",
            backgroundColor: "#403c3c",
            color: "#ffffe4",
            ":hover": {
              backgroundColor: "#fed053",
            },
            ":Mui-selected": {
              backgroundColor: "#fed053",
            },
          }}
        >
          {dateOptions[key]}
        </MenuItem>
      ))}
    </Select>
  );
}

export default DateSelection;
