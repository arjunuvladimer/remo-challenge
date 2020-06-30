import TableConfig from '../../components/tableConfig.json';
import gameDataActionTypes from './gameData.type'
const INITIAL_STATE = TableConfig

const gameDataReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case gameDataActionTypes.SET_USER_TO_TABLE:
            const idCheck = state.tables.map(
                table => table.seats.map(
                    seat => {
                        if(seat.userdetails){
                            return seat.userdetails.map(user => user.id === action.payload.id)
                        }
                        else{
                            return false
                        }
                    }
            ))      
          var existing = false
            for(var i=0; i < idCheck.length; i++){
                for(var j = 0 ; j< idCheck[i].length; j++){
                    for(var k=0; k < idCheck[i][j].length; k++){
                        if(idCheck[i][j][k]=== true){
                           existing = true
                        }
                    }
                }
            }
            if(!existing){
                        const range = 6
                        const seats = state.tables.map(table => table.seats.filter(seat => !seat.userdetails).length)
                        const Set1TableToInsert = state.tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 4)
                        const Set2TableToInsert = state.tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 3)
                        const Set3TableToInsert = state.tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 2)
                        const Set4TableToInsert = state.tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 1)
                        const Set5TableToInsert = state.tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 0)

                        if(Set1TableToInsert !== -1){
                            const seatNumber = seats[Set1TableToInsert]
                            state.tables[Set1TableToInsert].seats[6 - seatNumber].userdetails = [action.payload]
                        }
                        else if(Set2TableToInsert !== -1){
                            const seatNumber = seats[Set2TableToInsert]
                            state.tables[Set2TableToInsert].seats[6 - seatNumber].userdetails = [action.payload]
                        }
                        else if(range > 3 && Set3TableToInsert !== -1){
                        
                                const seatNumber = seats[Set3TableToInsert]
                                state.tables[Set3TableToInsert].seats[6 - seatNumber].userdetails = [action.payload]
                        }
                        else if(range > 4 && Set4TableToInsert !== -1){
                                const seatNumber = seats[Set4TableToInsert]
                                state.tables[Set4TableToInsert].seats[6 - seatNumber].userdetails = [action.payload]
                            }
                        else if(range > 5 && Set5TableToInsert !== -1){
                                const seatNumber = seats[Set5TableToInsert]
                                state.tables[Set5TableToInsert].seats[6 - seatNumber].userdetails = [action.payload]
                        }
                        
                        
                        
                        return {
                            ...state,
                            tables: state.tables
                        }
            }
            return state
            case gameDataActionTypes.REMOVE_FROM_TABLE:
                const tableToRemove = state.tables.findIndex(
                    table => table.seats.find(
                        seat => {
                            if(seat.userdetails){
                                return seat.userdetails.find(user => user.id === action.payload.id)
                            }
                            else{
                                return false
                            }
                        }
                  ))      
                  const seatToRemove = state.tables[tableToRemove].seats.findIndex(
                    seat => {
                      if(seat.userdetails){
                          return seat.userdetails.find(user => user.id === action.payload.id)
                      }
                      else{
                          return false
                      }
                    }
                  )
                  delete (state.tables[tableToRemove].seats[seatToRemove]).userdetails
                  return {
                      ...state,
                      tables: state.tables
                  }
            
            case gameDataActionTypes.SHIFT_TABLE:
                
            const tableIndex = state.tables.findIndex(table => table.id === action.payload.table.id)
            const seats = state.tables.map(table => table.seats.filter(seat => !seat.userdetails).length)
            const seatNumber = seats[tableIndex]
            if(seatNumber !== 0){
                state.tables[tableIndex].seats[6 - seatNumber].userdetails = [action.payload.user]
                return {
                    ...state,
                    tables: state.tables
                }
            }
            
            return state


        default:
            return state
    }
}

export default gameDataReducer