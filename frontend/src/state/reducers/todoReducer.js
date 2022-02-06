

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return action.payload;

        case "UPDATE_TODOS":
            return action.payload;

        default:
            return state
    }
};

export default todoReducer;
