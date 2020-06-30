import React,{ useState } from 'react'
import './table.styles.scss'
import Seat from 'components/seat/seat.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../reducers/user/user.selector'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {seatSettingAction, removeFromTable, shiftUserToTable} from '../../reducers/gameData/gameData.action'



class Table extends React.Component {
  
  render(){
    const {table,currentUser, removeFromTable,shiftUserToTable, seatSettingAction,history} = this.props
    return (
        <div onDoubleClick = {() => {
          const seatNumber = table.seats.filter(seat => !seat.userdetails).length
          if(seatNumber ===0 ){
            alert('Seats are Full')
          }
          else{
            removeFromTable(currentUser)
            shiftUserToTable(table,currentUser)
            history.push('/theater')
          }
        }} className='rt-room' style={{width: table.width, height: table.height, left: table.x, top: table.y}}>
                {
                  table.seats.map((seat,index) => (
                    <Seat key={index} seat={seat} />
                  ))
                }
                <div className='rt-room-name'>
                  {table.id}
                </div>
        </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
    seatSettingAction: table => dispatch(seatSettingAction(table)),
    removeFromTable: currentUser => dispatch(removeFromTable(currentUser)),
    shiftUserToTable: (table,user) => dispatch(shiftUserToTable(table,user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Table))