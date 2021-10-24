function reducer(state, action) {
    switch (action.type) {
        case "update-theme":
            return {
                ...state,
                isDarkMode: action.isDarkMode,
            };
        default:
            throw new Error();
    }
}

export default reducer;
