import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import css from './RegistrationForm.module.css'



export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    name,
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register(userRegisterData)).then(response => {
      if (response.payload === '400') {
        console.log(response.payload)
        return;
      }
      if (response.payload === 'Network Error') {
        toast.error('Network Error');
        return;
      }
      if (response.payload.token) {
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className={css.RegistrationFormSection}>
      <h2 className={css.RegistrationFormTitle}>Registration form</h2>
      <form onSubmit={onFormSubmit} className={css.RegistrationFormForm}>
        <label>
          <span className={css.RegistrationFormSpan}>Name</span>
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            required
            placeholder="Name"
            className={css.RegistrationFormInput}
            autoComplete='off'
          />
        </label>
        <label>
          <span className={css.RegistrationFormSpan}>E-mail</span>
          <input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            required
            placeholder="Email"
            className={css.RegistrationFormInput}
            autoComplete='off'
          />
        </label>
        <label>
          <span className={css.RegistrationFormSpan}>Password</span>
          <input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            required
            placeholder="Password"
            className={css.RegistrationFormInput}
            autoComplete='off'
          />
        </label>

        <button type="submit" className={css.RegistrationFormButton}>
          Sign Up
        </button>
      </form>
      {isLoading && <Loader />}
    </section>
  );
};
