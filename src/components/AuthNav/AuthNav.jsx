// import { Box } from 'components/Box';
import { Link } from 'react-router-dom';
// import { HiOutlineUserAdd,HiOutlineLogin } from 'react-icons/hi';
// import { AuthStyled,  LinkStyled } from './AuthNav.styled';
import css from './AuthNav.module.css'
export const AuthNav = () => {
  return (
    <>

        <ul className={css.AuthNavUl}>
          <li>
            <Link to="register" className={css.AuthNavA}>
              Sign Up 
              {/* <HiOutlineUserAdd /> */}
            </Link>
          </li>
          <li>
            <Link to="login" className={css.AuthNavA}>
            log In
            {/* <HiOutlineLogin/> */}
            </Link>
          </li>
        </ul>

    </>
  );
};
