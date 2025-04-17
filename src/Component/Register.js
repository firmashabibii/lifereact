import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Registrasi berhasil!');
    navigate('/');
  };

  return (
    <div className='register'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Ulangi Password"
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Daftar</button>
      </form>
      <p>Sudah punya akun? <Link to="/login">Login di sini</Link></p>
    </div>
  );
};

export default Register;