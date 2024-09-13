import { Select, MenuItem } from "@mui/material";
import style from "./DateSelection.module.css";
const dateOptions = {
  1: "Today",
  7: "This Week",
  30: "This Month",
  3650: "All Time",
};
function DateSelection({ date, setDate }) {
  return (
    <div className={style.dateSelection}>
      <Select
        autoWidth
        id="date-selection"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Date"
        variant="outlined"
        color="success"
        sx={{
          fontSize: "1em",
          height: "40px",
          backgroundColor: "#fff",
        }}
      >
        {Object.keys(dateOptions).map((key) => (
          <MenuItem key={key} value={key}>
            {dateOptions[key]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default DateSelection;
