import React from "react";
import { Provider } from "react-redux";
import List from "./../components/List/List";
import Form from "../components/Form/Form";
import store from "./../store/store";

import Box from "@mui/material/Box";

function ToDoList() {
  return (<Box
      component="div"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Provider store={store}>
        <h1>My ToDo List on React</h1>
        <Form />
        <List />
      </Provider>
    </Box>
  );
}

export default ToDoList;
