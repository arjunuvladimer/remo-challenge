import {UserActionType} from './user.type'

export const setCurrentUser = (currentUser) => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: currentUser
})

export const logOutUser = () => ({
    type: UserActionType.LOGOUT_USER,
    payload: null
})
