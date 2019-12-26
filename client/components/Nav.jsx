import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Nav extends React.Component {
  render(){
    const {auth, logout} = this.props
    return(
      <Link to='/' onClick={()=> logout()}>Logout</Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)