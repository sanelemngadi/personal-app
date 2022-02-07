export const fetchUser = user => {
    return dispatch => {
        dispatch({
            type: "FETCH_USER",
            payload: user ? user : ""
        })
    }
}

export const setCurrentPage = (page) => {
    return dispatch => {
        dispatch({
            type: 'CURRENT_PAGE',
            payload: page
        })
    }
}

export const fetchTodos = (todos) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_TODOS',
            payload: todos
        })
    }
}

export const deleteTodo = todo => {
    return dispatch => {
        dispatch({
            type: "DELETE_TODO",
            payload: todo
        })
    }
}
export const updateTodo = todo => {
    return dispatch => {
        dispatch({
            type: "UPDATE_TODO",
            payload: todo
        })
    }
}
export const addTodo = todo => {
    return dispatch => {
        dispatch({
            type: "ADD_TODO",
            payload: todo
        })
    }
}