
const currentPageReducer = (state = "home", action) => {
    switch (action.type) {
        case 'CURRENT_PAGE':
            return action.payload;

        default:
            return state;
    }
};

export default currentPageReducer;
