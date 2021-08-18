import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <section className="login">
    <span className="loginTitle">Welcome</span>
      <form className="loginForm">
        <label >Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email..." />
        <label >Password</label>
        <input type="text" className="loginInput" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </section>
  );
}

export default Login;
