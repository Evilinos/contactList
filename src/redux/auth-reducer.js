
// constants
const LOGIN = 'auth/LOGIN'

// state
const initialState = {
    isAuth: true,
}

// reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, ...action.payload, isAuth: true}
        default:
            return {...state}
    }
}

// action creators
export const login = (userData) => ({type: LOGIN, payload: userData})

export default authReducer