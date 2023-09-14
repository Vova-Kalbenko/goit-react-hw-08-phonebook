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
              Дім
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="phonebook">Телефонна книга</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};