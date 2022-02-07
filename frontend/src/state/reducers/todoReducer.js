

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return action.payload;

        case "UPDATE_TODO":
            return action.payload;

        case "ADD_TODO":
            return action.payload;

        case "DELETE_TODO":
            return action.payload;

        default:
            return state
    }
};

export default todoReducer;
