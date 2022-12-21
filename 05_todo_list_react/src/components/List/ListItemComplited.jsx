import React from "react";
import { useDispatch } from "react-redux";
import { fetchChangeItemThunk } from "./../../store/list/action";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function ListItemComplited({ item }) {
  const dispatch = useDispatch();

  return (
    <Checkbox
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      type="checkbox"
      defaultChecked={item.completed}
      onChange={() => dispatch(fetchChangeItemThunk(item))}
    />
  );
}

export default ListItemComplited;
