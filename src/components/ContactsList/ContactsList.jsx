import { Box, Btn, ListBox } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/AddContactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const lowCaseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Btn onClick={() => dispatch(deleteContact(id))} type="button">
              Delete contact
            </Btn>
          </li>
        );
      })}
    </ul>
  );
};
