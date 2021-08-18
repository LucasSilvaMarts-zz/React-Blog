import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <section className="register">
    <span className="registerTitle">Create your user</span>
      <form className="registerForm">
        <label >Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..." />
        <label >Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..." />
        <label >Password</label>
        <input type="text" className="registerInput" placeholder="Enter your password..." />
        <button className="registerButton">
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
