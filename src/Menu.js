import React from 'react';
import MenuItem from './MenuItem';
import { menuItems } from './constants/menuItems';

const Menu = () => (
  <ul>
    { menuItems.map(item => (
      <li key={item.title}>
        <MenuItem {...item} />
      </li>
    ))}
  </ul>
);

export default Menu;
