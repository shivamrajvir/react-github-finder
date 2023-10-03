import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        loading: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // get initial users (testing purpose)
    // const fetchUsers = async () => {
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })
    //     // setUsers(data);
    //     // setLoading(false);
    // }

    // for searching users
    // const searchUsers = async (text) => {
    //     setLoading()

    //     const params = new URLSearchParams({
    //         q: text
    //     })

    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const { items } = await response.json()
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items
    //     })
    //     // setUsers(data);
    //     // setLoading(false);
    // }

    

    // const clearUsers = () => {
    //     dispatch({
    //         type: 'SET_USERS',
    //         payload: []
    //     })
    // }

    // const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <GithubContext.Provider value={{
        ...state, dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;