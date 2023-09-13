import { Box } from 'components/Box';
import { Link } from 'react-router-dom';
// import { HiOutlineUserAdd,HiOutlineLogin } from 'react-icons/hi';
// import { AuthStyled,  LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Box as={'nav'} display="flex">
        <ul>
          <li>
            <Link to="register">
              Зареєструйся 
              {/* <HiOutlineUserAdd /> */}
            </Link>
          </li>
          <li>
            <Link to="login">
                Увійти
            {/* <HiOutlineLogin/> */}
            </Link>
          </li>
        </ul>
      </Box>
    </>
  );
};
