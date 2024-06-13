let initialState = {
    authenticate: false
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, authenticate: true }
        case "LOGOUT":
            return { ...state, authenticate: false }
        default:
            return state;
    }
}

export default reducer;