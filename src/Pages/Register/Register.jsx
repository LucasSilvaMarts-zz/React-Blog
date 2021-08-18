import './register.css';

const Register = () => {
  return (
    <section className="register">
    <span className="registerTitle">Create your user</span>
      <form className="registerForm">
        <label >Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..." />
        <label >Password</label>
        <input type="text" className="registerInput" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </section>
  );
}

export default Register;
