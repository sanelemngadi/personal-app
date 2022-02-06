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
