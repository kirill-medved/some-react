import React from 'react';
import header from './Header.module.css';
import { IUser } from '../../index';

interface HeaderProps {
  user: IUser;
}

const Header = ({ user }: HeaderProps): JSX.Element => {
  return (
    <div className={header.bg}>
      <div className={header.wrap}>
        <div className={header.content}>
          <div>{`${user.firstName} ${user.lastName}`}</div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
