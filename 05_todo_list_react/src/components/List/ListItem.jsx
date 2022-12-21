import React from 'react';
import ListItemComplited from './ListItemComplited';
import ListItemDelete from './ListItemDelete';

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function ListItem({item}) {
    return (
      <Box
        component="div"
        sx={{
          border: "1px solid crimson",
          p: "10px",
          marginBottom: "5px",
          display: "flex",
          width: "250px",
          justifyContent: "space-between",
        }}
      >
        <ListItemComplited item={item} />
        <Div sx={{display: "flex", alignItems: "center", fontFamily: "Trirong", fontSize: "larger"}}>{item.text}</Div>
        <ListItemDelete id={item.id} />
      </Box>
    );
}

export default ListItem;