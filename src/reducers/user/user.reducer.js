import { UserActionType } from "./user.type";

const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE,action) => {

    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionType.LOGOUT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state
    }

}

export default userReducer