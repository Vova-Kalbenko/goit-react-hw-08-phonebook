import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterContacts } from 'redux/contacts/contacts-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import css from './ContactList.module.css'


export const ContactList = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };


  return (
    <section className={css.ContactListFormSection}>
      {!contacts.length && <p>PhoneBook is empty</p>}
      {filterContacts.length > 0 ? (
        <ul className={css.ContactListFormForm}>
          {filterContacts.map(({ name, number, id }) => (
            <li key={id} data-id={id}>
              <div className={css.ContactListdiv}>
                <p className={css.PhoneBookFormSpan}>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  name="deleteBtn"
                  onClick={() => onDeleteContact(id)}
                   className={css.ContactListFormButton}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        contacts.length > 0 && <p>PhoneBook is empty</p>
      )}
      {/* {isModalOpen&&<Modal onCloseModal={onCloseModal} updateContactId={updateContactId}/>} */}
    </section>
  );
};
