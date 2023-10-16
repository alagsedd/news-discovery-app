import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import SelectContext from "../contexts/SelectSortContext";

const SortBy = () => {
  const { sortBy, dispatch } = useContext(SelectContext);

  const handleChange = (event: SelectChangeEvent<string>) => {
    console.log(event.target.value);
    dispatch({ type: "sortBy", sortBy: event.target.value });
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-by">Sort By</InputLabel>
          <Select
            labelId="sort-by"
            id="demo-simple-select"
            value={sortBy}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"popularity"}>Popularity</MenuItem>
            <MenuItem value={"relevancy"}>Relevancy</MenuItem>
            <MenuItem value={"publishedAT"}>Published at</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SortBy;
