import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>📱 TrustFilter Web Interface</h1>
    <Link to="/add"><button>Add Contact</button></Link> &nbsp;
    <Link to="/list"><button>View Contacts</button></Link>
  </div>
);

export default Home;
