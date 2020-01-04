import React from 'react'
import { isAuthenticated } from '../utils/auth'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render(){
    if(isAuthenticated()){
      return (
        logs.map(log=>{
          return(
            <Log logInfo={log}/>
          )
        })
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