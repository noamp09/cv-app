import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(true);

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, phone }); // Update submitted data state
    console.log("Submitted Data:", submittedData);
    // Clear form fields (optional)
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="input-field"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
      ) : ( // Display submitted data when in view mode
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone: {submittedData.phone}</p>
        </div>
      )}
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'View' : 'Cancel'}
      </button>
    </div>
  );
};

export default GeneralInfo;
