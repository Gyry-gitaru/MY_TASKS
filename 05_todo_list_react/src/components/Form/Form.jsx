import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostItemThunk } from "./../../store/list/action";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

function Form() {
  const [firstName, setFirstName] = useState("");

  const dispatch = useDispatch();

  const [task, setTask] = useState({ text: "", completed: false });
  const handleTitle = (e) =>
    setTask((prevState) => ({ ...prevState, text: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostItemThunk(task));

    setFirstName("");
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { mb: 2, width: "inherit" },
        mx: "auto",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <TextField
        id="standard-basic"
        label="Create todo"
        variant="standard"
        onBlur={handleTitle}
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
      />
      <Button type="submit" variant="contained" startIcon={<CreateIcon />}>
        ADD
      </Button>
    </Box>
  );
}

export default Form;
