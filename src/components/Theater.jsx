import * as React from 'react';
import './Theater.scss'; 
import MapImage from '../assets/conference-map.svg';
import TableConfig from './tableConfig.json';
import Table from './table/table.componet'
import {connect} from 'react-redux'
import {setUserToTable} from '../reducers/gameData/gameData.action'
import {selectTables} from '../reducers/gameData/gameData.selector'
import {createStructuredSelector} from 'reselect'


class Theater extends React.Component {

  componentDidMount(){
    const {user,setUserToTable} = this.props
    setUserToTable(user)
  }
  render(){
    // const Tables = TableConfig.tables;
    const {user,tables} = this.props
    return ( 
      <div className='remo-theater' style={{width: TableConfig.width, height: TableConfig.height}}>
        <div className='rt-app-bar'>
          {/**
            * Show user profile pic/name after login
            */}
            
        </div>
        <div className='rt-rooms'>
         {tables.map(table => (
            <Table key={table.id} table= {table} />
         ))}
        </div>
        <div className='rt-background'>
          <img src={MapImage} alt='Conference background'/>
        </div>
      </div>
    )
  }
}
 
// Dispacthing the currentUser
const mapDispatchToProps = dispatch => ({
  setUserToTable: user => dispatch(setUserToTable(user))
})

const mapStateToProps = ({gameData}) => ({
  tables: gameData.tables
})

export default connect(mapStateToProps,mapDispatchToProps)(Theater);