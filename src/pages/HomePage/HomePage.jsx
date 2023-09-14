import { selectAuthToken, selectAuthUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

// import { HomePageMain, HomePageTitle, HomePageInfo } from './HomePage.styled';
// ==============================
import css from './HomePage.module.css'
const HomePage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);
  return (
    <main className={css.HomePageMain}>
      {token ? (
        <>
          <h1> Вітаю, {name} </h1>
          <h2>Твоя персональна телефонна книга! </h2>
        </>
      ) : (
        <>
          <h1> Ласкаво прошу до телефонної книги </h1>
          <h2>Будь-ласка, "Зареєструйся", або "Увійди"</h2>
        </>
      )}
    </main>
  );
};

export default HomePage;