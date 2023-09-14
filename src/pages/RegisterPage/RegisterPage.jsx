import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
// import { RegisterPageMain } from './RegisterPage.styled';
import css from './RegisterPage.module.css'
export const RegisterPage = () => {
  return (
    <main className={css.RegisterPageMain}>
      <RegistrationForm />
    </main>
  );
};

export default RegisterPage;