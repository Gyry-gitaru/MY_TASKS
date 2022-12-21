import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { fetchListThunk } from "../../store/list/action";

function List() {
  const { list } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchListThunk());
    })();
  }, []);

  return (
    <div>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
