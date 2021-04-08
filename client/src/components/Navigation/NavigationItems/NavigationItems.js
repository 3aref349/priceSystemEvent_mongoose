import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'dashboard', text: 'Dashboard', link: '/', auth: true },
  { id: 'stepform', text: 'Add Price', link: '/stepform', auth: true },
  { id: 'confirm-price', text: 'Confirm Price', link: '/confirm-price', auth: true},
 

  /*
  {  { id: 'Station Event Log', text: 'Station Event Log', link: '/stationeventlog', auth: true },
  { id: 'fusionreport', text: 'Fusion Report', link: '/fusionreport', auth: true },
  { id: 'priceevent', text: 'Price Event', link: '/priceevent', auth: true },
  { id: 'newpriceevent', text: ' NEw Price Event', link: '/newpriceevent', auth: true },}*/

 
  { id: 'login', text: 'Login', link: '/', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false }
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )
];

export default navigationItems;
