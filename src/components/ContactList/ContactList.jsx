// import { VscTrash, VscEdit } from 'react-icons/vsc';
// import Avatar from 'react-avatar';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterContacts,
} from 'redux/contacts/contactsSelectors';

// import { Contact, Ul, BtnWrapper, Button } from './ContactList.styled';
// import { useState } from 'react';
import { deleteContacts } from 'redux/contacts/contactsOperations';
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
    <>
      {!contacts.length && <p>Твоя телефонна книга пуста</p>}
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
                  name="updateBtn"
                //   onClick={() => onModalOpen(id)}
                >
                  {/* <VscEdit /> */}
                </button>
                <button
                  type="button"
                  name="deleteBtn"
                  onClick={() => onDeleteContact(id)}
                >
                  {/* <VscTrash /> */}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        contacts.length > 0 && <p>Нічого не знайдено...</p>
      )}
      {/* {isModalOpen&&<Modal onCloseModal={onCloseModal} updateContactId={updateContactId}/>} */}
    </>
  );
};
