import { useState } from 'react';
// import { VscAdd } from 'react-icons/vsc';
// import { Label, Input, Button } from './Phonebook.styled';
// ==============================
import css from './Phonebook.module.css'
export const Phonebook = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = {
    name,
    number,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return null;
    }   
  };

  const onFormSubmitAddContact = e => {
    e.preventDefault();
    onAddContact(state);
    onFormReset();
  };

  const onFormReset = () => {
    setName("");
    setNumber("");   
  };

  return (
    <section className={css.PhoneBookFormSection}>
      <form onSubmit={onFormSubmitAddContact} className={css.PhoneBookFormForm}>
        <label>
          <span className={css.PhoneBookFormSpan}>Name</span>
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}            
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]{4,8}*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Write name"
            className={css.PhoneBookFormInput}
          />
        </label>
        <label>
        <span className={css.PhoneBookFormSpan}>Number</span>
          <input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Write number"
            className={css.PhoneBookFormInput}
          />
        </label>
        <button type="submit" className={css.PhoneBookFormButton}>
          Add contact
          {/* <VscAdd /> */}
        </button>
      </form>
    </section>
  );
};
