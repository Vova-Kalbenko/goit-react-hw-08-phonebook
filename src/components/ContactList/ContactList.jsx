// import { VscTrash, VscEdit } from 'react-icons/vsc';
// import Avatar from 'react-avatar';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterContacts } from 'redux/contacts/contacts-selectors';
// import { Contact, Ul, BtnWrapper, Button } from './ContactList.styled';
// import { useState } from 'react';
import css from './ContactList.module.css'
import { deleteContacts } from 'redux/contacts/contacts-operations';
// import { Modal } from 'components/Modal/Modal';
// ===========================


export const ContactList = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [updateContactId, setUpdateContactId] = useState(null);

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

//   const onModalOpen = id => {
//     setIsModalOpen(true);
//     setUpdateContactId(id);
//   };

//   const onCloseModal =()=>{
//     setIsModalOpen(false);
//   }

  return (
    <section className={css.ContactListFormSection}>
      {!contacts.length && <p>PhoneBook is empty</p>}
      {filterContacts.length > 0 ? (
        <ul>
          {filterContacts.map(({ name, number, id }) => (
            <li key={id} data-id={id}>
              {/* <Avatar
                round={true}
                size={40}
                name={name}
                alt={'avatar'}
                color={'#2196f3'}
              /> */}
              <div>
                <p>
                  {name}: {number}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  name="deleteBtn"
                  onClick={() => onDeleteContact(id)}
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
