import React from 'react'
import './seat.component.scss'

const Seat = ({seat}) => {
    
    return (
        <div style={{left:seat.x,top:seat.y}} className='avatar'>
                {
                      seat.userdetails?
                      <img  alt='avatar' src={seat.userdetails[0].photoURL} />
                      :
                      ''
                      }
        </div>
    )
}

export default Seat