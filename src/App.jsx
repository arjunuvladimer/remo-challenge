import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth';
import Theater from './components/Theater';
import Header from './components/header/header'
import {connect} from 'react-redux'
import {selectCurrentUser} from './reducers/user/user.selector'
import {createStructuredSelector} from 'reselect'

const App = ({currentUser,setUserToTable}) => {
  return (
      <div>
        {
          currentUser?
          <Header user={currentUser} />
          :
          ''
        }
        <Switch>
          <Route exact={true} path='/' component={Auth} />
          <Route exact={true} path='/theater'
            render={
              () => 
              currentUser ? 
               (<Theater user={currentUser}/>)
              :
              (<Redirect to='/' />)
                
            }
          />
        </Switch>
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps,null)(App);
