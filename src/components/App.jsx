import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
