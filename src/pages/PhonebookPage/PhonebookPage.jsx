import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { updateFilter } from 'redux/filter/filter-slice';
import { addContacts } from 'redux/contacts/contacts-operations';
import { toast } from 'react-toastify';
import { Phonebook } from '../../components/Phonebook/Phonebook';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Section } from '../../components/Section/Section';
import Loader from 'components/Loader/Loader';

const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? toast.error(`"${uniqUserSearch.name}" already in phonebook`)
      : dispatch(addContacts(newUser));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <main>
      <Section title="PhoneBook">
        <Phonebook onAddContact={onAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList />
      </Section>
      {isLoading && <Loader />}
    </main>
  );
};

export default PhonebookPage;