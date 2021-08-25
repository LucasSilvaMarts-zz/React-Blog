import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/register', {
      username,
      email,
      password,
    });
    console.log(res)
  };

  return (
    <section className="register">
    <span className="registerTitle">Create your user</span>
      <form className="registerForm" onSubmit={ handleSubmit }>
        <label >Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={  e => setUsername(e.target.value)  }
        />
        <label >Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={  e => setEmail(e.target.value) }
        />
        <label >Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={ e => setPassword(e.target.value) }
        />
        <button className="registerButton" type="submit">
          <Link to="/register" className="link">Register</Link>
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">Login</Link>
      </button>
    </section>
  );
}

export default Register;
