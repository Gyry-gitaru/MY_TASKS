import React from 'react';
import {useDispatch} from 'react-redux'
import {fetchDeleteItemThunk} from './../../store/list/action'

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

function ListItemDelete({id}) {
    const dispatch = useDispatch();

    return (
      // <Button variant="outlined" centerIcon={<DeleteIcon  onClick={() => dispatch(fetchDeleteItemThunk(id))}/>} />
      <Fab
        size="small"
        aria-label="delete"
        onClick={() => dispatch(fetchDeleteItemThunk(id))}
        sx={{
          background: "#1876d2",
        }}
      >
        <DeleteIcon />
      </Fab>
    );
}

export default ListItemDelete;