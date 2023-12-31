import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import css from './LoginForm.module.css'


export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login(userRegisterData)).then(response => {
      if (response.payload === '404') {
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Cannot fetch data. Check yout internet connection');
        return;
      }
      if (response.payload.token) {
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <section className={css.LogInFormSection}>
      <h2 className={css.LogInFormTitle}>Log In</h2>
      <form onSubmit={onFormSubmit} className={css.LogInFormForm}>
        <label>
        <span className={css.LogInFormSpan}>E-mail</span>
          <input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            required
            placeholder="Email"
            className={css.LogInFormInput}
            autoComplete='off'
          />
        </label>
        <label>
          <span className={css.LogInFormSpan}>Password</span>
          <input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            required
            placeholder="Password"
            className={css.LogInFormInput}
            autoComplete='off'
          />
        </label>

        <button type="submit" className={css.LogInFormButton}>
          Log In
        </button>
      </form>
      {isLoading && <Loader />}
    </section>
  );
};
