import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LogInPage.module.css'

export const LogInPage = () => {
  return (
    <main className={css.LogInPageMain}>
      <LoginForm />
    </main>
  );
};

export default LogInPage;