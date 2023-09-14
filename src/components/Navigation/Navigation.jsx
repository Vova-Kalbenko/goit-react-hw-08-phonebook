import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
// import { Box } from 'components/Box';
// import { NavStyled, LinkNav } from './Navigation.styled';
import css from './Navigation.module.css'
export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <>
      <nav>
        <ul className={css.NavigationUl}>
          <li>
            <NavLink to="/" end className={css.headerLogo}>
              Home
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="phonebook" className={css.headerPhoneBook}>PhoneBook</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};