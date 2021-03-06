import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const Filter = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [priceValue, setPriceValue] = useState(search.get("price_lte") || "");

  const filterProducts = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setSearchValue(search.get("q") || "");

    setPriceValue(search.get("price_lte") || "");
    getProducts();
  };

  const resetFilter = () => {
    navigate("/shop");
    setSearchValue("");

    setPriceValue("");
    getProducts();
  };

  return (
    <div className="filters-block">
      <div>
        <TextField
          value={searchValue}
          onChange={(e) => filterProducts("q", e.target.value)}
          variant="outlined"
          label="Живой поиск ..."
        />
      </div>
      <div></div>
      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            onChange={(e) => filterProducts("price_lte", e.target.value)}
            valueLabelDisplay="auto"
            max={200000}
            step={1000}
          />
        </Box>
      </div>
      <div>
        <Button onClick={resetFilter} variant="contained" color="inherit">
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default Filter;
