import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [aiResult, setAiResult] = useState(null);

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:5000/api/add', { phone_number: phone });
      const ai = await axios.post('http://localhost:5000/api/analyze', { message });
      setAiResult(ai.data.risk || ai.data.status);
    } catch (err) {
      alert('Error adding contact or analyzing message');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Add Phone Number</h2>
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <br /><br />
      <textarea placeholder="Type message to scan for threat..." value={message} onChange={(e) => setMessage(e.target.value)} />
      <br /><br />
      <button onClick={handleAdd}>Submit & Analyze</button>
      {aiResult && (
        <div style={{ marginTop: 20 }}>
          <strong>AI Analysis:</strong> {aiResult}
        </div>
      )}
    </div>
  );
};

export default AddContact;
