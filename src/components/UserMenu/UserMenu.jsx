import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from 'redux/auth/authOperations';
import { selectAuthUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css'


export const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.payload === 'Запит не виконано, помилка - 400') {
        // toast.error('Ой-йо...Щось зламалось. Спробуй пізніше!');
        return;
      }
      if (!response.payload) {
        // toast.success('Ти успішно вийшов! Скоріше повертайся!');
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
