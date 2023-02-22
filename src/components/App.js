import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  
const [contacts, setContacts]=useState([])

const AddContactHandler=(contact)=>{
setContacts([...contacts, {id: uuid(), ...contact}]);
};
const removeContactHandler = (id) =>{
  const newConctacList = contacts.filter((contact) => {
    return contact.id!==id
  });
  setContacts(newConctacList)
};
  return (
    <div className='ui container'>
        <Header />
        <AddContact AddContactHandler={AddContactHandler}/>
        <ContactList contacts={contacts} removeContact={removeContactHandler}/>
    </div>
  );
}

export default App;
