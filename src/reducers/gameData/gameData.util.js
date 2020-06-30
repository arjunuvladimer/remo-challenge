export const setUserToTableUtil = (tables,userToAdd) => {
        const existing = tables.map(table => table.seats.filter(seat => seat.userdetails))
        const existingId = existing.find(user => user.find(some => some.userdetails.find(someone => someone.id === 'some1')))
        if(existingId === null){
                        const seats = tables.map(table => table.seats.filter(seat => !seat.userdetails).length)
                        const tableToInsert = tables.findIndex(table => table.seats.filter(seat => !seat.userdetails).length > 4)
                        const seatNumber = seats[tableToInsert]
                        return [...tables, tables[tableToInsert].seats[seatNumber - 1]]
                }
                return tables
        }