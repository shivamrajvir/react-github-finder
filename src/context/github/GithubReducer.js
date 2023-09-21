const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            setTimeout(() => {
                return {
                    ...state,
                    users: action.payload,
                    loading: false
                }
                
            })
        default:
            return state;
    }
}

export default githubReducer;