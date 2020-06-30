import gameDataActionTypes from './gameData.type'

export const seatSettingAction = (tableId) => ({
    type: gameDataActionTypes.SET_SEAT,
    payload:tableId
})

export const setUserToTable = (user) => ({
    type: gameDataActionTypes.SET_USER_TO_TABLE,
    payload:user
}) 

export const removeFromTable = (user) => ({
    type: gameDataActionTypes.REMOVE_FROM_TABLE,
    payload:user
})

export const shiftUserToTable = (table,user) => ({
    type: gameDataActionTypes.SHIFT_TABLE,
    payload:{table,user}
})