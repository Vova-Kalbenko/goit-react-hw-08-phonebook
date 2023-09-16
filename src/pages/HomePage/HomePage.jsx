import { selectAuthToken, selectAuthUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import {BsArrowUp} from 'react-icons/bs'


import css from './HomePage.module.css'
const HomePage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);
  return (
    <main className={css.HomePageMain}>
      {token ? (
        <>
          <h1> Welcome, {name}, your phonebook is below </h1>
        </>
      ) : (
        <div className={css.HomePageWrapper}>
          <h1 className={css.HomePageTitle}> Welcome to PhoneBook Application </h1>
          <h2>Sign up or log In by links below <BsArrowUp/></h2>
        </div>
      )}
    </main>
  );
};

export default HomePage;