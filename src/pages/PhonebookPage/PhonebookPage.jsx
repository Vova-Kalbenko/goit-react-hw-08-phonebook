import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  // selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { updateFilter } from 'redux/filter/filter-slice';
import { addContacts } from 'redux/contacts/contacts-operations';

import { Phonebook } from '../../components/Phonebook/Phonebook';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Section } from '../../components/Section/Section';
// import { Loader } from '../../components/Loader/Loader';

// import { toast } from 'react-toastify';
// import { PhonebookMain } from './PhonebookPage.styled';
// ==============================

const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? 
    //   tyt bil toast
      console.log(`"${uniqUserSearch.name}" вже є в телефонній книзі`)
      : dispatch(addContacts(newUser));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <main>
      <Section title="Телефонна книга">
        <Phonebook onAddContact={onAddContact} />
      </Section>

      <Section title="Контакти">
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList />
      </Section>
      {/* {isLoading && <Loader />} */}
    </main>
  );
};

export default PhonebookPage;