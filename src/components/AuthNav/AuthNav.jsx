import { Link } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <>

        <ul className={css.AuthNavUl}>
          <li>
            <Link to="register" className={css.AuthNavA}>
              Sign Up 
            </Link>
          </li>
          <li>
            <Link to="login" className={css.AuthNavA}>
            log In
            </Link>
          </li>
        </ul>

    </>
  );
};
