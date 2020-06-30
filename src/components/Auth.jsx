import React from 'react'
import {withRouter} from 'react-router-dom'
import { signInWithGoogle } from '../services/firebase'
import {auth, createUserProfileDocument} from '../services/firebase'
import {connect} from 'react-redux'
import {setCurrentUser} from '../reducers/user/user.action'
import {selectCurrentUser} from '../reducers/user/user.selector'
import {createStructuredSelector} from 'reselect'


class Auth extends React.Component  {

  componentDidMount(){
    const { setCurrentUser, history } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        history.push('/theater')
      }
    });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth()
  // }

  // redirect = () => {
  //   const provider = new Firebase.auth.GoogleAuthProvider();
  //   Firebase.auth().signInWithPopup(provider);
  // };

  render(){
    return (
      <div 
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1> Remo Coding Challenge Join Room </h1>
        <button onClick={signInWithGoogle}> Login With Google </button>
      </div> 
    )
  }
}

// Getting Current User
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
// Dispacthing the currentUser
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth))