import {
    getTodoList,
    updateItem,
    deleteItem,
    addNewTodoItem
} from "../../servises/todoServices";

export const ACTION_SET_LIST = 'ACTION_SET_LIST';
export const ACTION_UPDATE_ITEM = 'ACTION_UPDATE_ITEM'
export const ACTION_DELETE_ITEM = `ACTION_DELETE_ITEM`;
export const ACTION_POST_ITEM = `ACTION_POST_ITEM`;


export const setList = list => ({
    type: ACTION_SET_LIST,
    payload: list
});

export const fetchListThunk = () => {
    return async (dispatch, getState) => {
        let data = await getTodoList();
        dispatch(setList(data));
    }
}

export const modifyItem = item => ({
    type: ACTION_UPDATE_ITEM,
    payload: item
})

export const fetchChangeItemThunk = (item) => {
    return async (dispatch) => {
        dispatch(modifyItem(await updateItem(item.id, {
            completed: !item.completed
        })))
    }
}

export const removeItem = id => ({
    type: ACTION_DELETE_ITEM,
    payload: id
})

export const fetchDeleteItemThunk = (id) => {
    return async (dispatch) => {
        await deleteItem(id);
        dispatch(removeItem(id));
    }
}

export const addItem = obj => ({
    type: ACTION_POST_ITEM,
    payload: obj
})

export const fetchPostItemThunk = obj => {
    return async (dispatch) => {
        dispatch(addItem(await addNewTodoItem(obj)));
    }
}