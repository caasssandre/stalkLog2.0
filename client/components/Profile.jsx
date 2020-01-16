import React from 'react'
import { isAuthenticated } from '../utils/auth'
import { connect } from 'react-redux'
// import { getLogs } from '../actions/logs'

class Profile extends React.Component {
  componentDidMount(){
    this.props.dispatch(getLogs)
  }
  render(){
    if(isAuthenticated()){
      console.log('log')
      return (
        <Log/>
      )
    }
    else{
      return (
        <h1>You are not logged in</h1>
      )
    }
  }
}

function mapStateToProps(state){
  return ({
    logs : state.logs
  })
}

export default connect(mapStateToProps)(Profile)