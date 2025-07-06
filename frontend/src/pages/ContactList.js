import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/list').then((res) => setContacts(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Saved Phone Numbers</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.phone_number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
