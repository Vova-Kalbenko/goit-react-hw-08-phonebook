import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from 'redux/auth/authOperations';
import { selectAuthUser } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';
import css from './UserMenu.module.css'


export const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === '400') {
        toast.error('Something went wrong.');
        return;
      }
      if (!response.payload) {
        navigate('/', { replace: true });
      }
    });
  };

  return (
    <div className={css.UserMenuWrapper}>
        <p className={css.UserMenuUser}>
          Welcome, {name}!
        </p>

      <button onClick={onLogout} type="button" className={css.UserMenuButton}>
        Log out
      </button>
    </div>
  );
};
