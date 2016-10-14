import React from 'react'
import {Link} from 'react-router'
import ServiceSubscriber from '../utils/Services/ServiceSubscriber'

const Header = (props) => {
  const user = props.userService.data
  return (
    <header className='header'>
      <div className='brand'><Link to='/'><h1>Monkey Quizz</h1></Link></div>
      <div className='user'>{user || 'Anonyme'}</div>
    </header>
  )
}

Header.propTypes = {
  userService: React.PropTypes.shape({
    data: React.PropTypes.string
  }).isRequired
}

export default ServiceSubscriber({name: 'userService'})(Header)
