import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActionTypes } from '../../store/action_types/loginActionTypes';
import { useAlert } from '../../context/AlertContext';

const Navbar = ({ setTogglePopup }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const { handleShowAlert } = useAlert();
  const handleLogout = () => {
    dispatch({type: loginActionTypes.LOGOUT_USER });
     handleShowAlert('success', 'You’ve been signed out.') 
  };

  return (
    <div className="navbar__container">
      <div className="navbar">
        <h2 className="navbar__header">
          Todo.
        </h2>
        <div className="navbar__links">
          <ul>
            {isLogged && <li><Link to="/todo">Tasks</Link></li>}
            {isLogged && <li><Link to="/profile">Myprofile</Link></li>}
            {!isLogged ? (
              <li><Link to="/">Login</Link></li>
            ) : (
              <li>
                <Link onClick={handleLogout} to="/">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
