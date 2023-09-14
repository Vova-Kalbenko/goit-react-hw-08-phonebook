import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css'
// import { AppBarHeader } from './AppBar.styled';

// =========================================

export const AppBar = () => {
  const token = useSelector(selectAuthToken);
  return (
    <header className={css.header}>
      <div className={css.headerWrapper}>
        <Navigation />
        {token ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};