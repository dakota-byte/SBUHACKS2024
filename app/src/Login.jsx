import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    key1: '',
    key2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/add_user/${formData.key1}`, {
        method: 'POST'
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" name="key1" value={formData.key1} onChange={handleChange} />
      <input type="text" name="key2" value={formData.key2} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
