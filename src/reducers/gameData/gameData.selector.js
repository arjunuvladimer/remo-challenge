import {createSelector} from 'reselect'

const selectGameData = state => state.gameData

export const selectTables = createSelector(
    [selectGameData],
    gameData => gameData.tables
)