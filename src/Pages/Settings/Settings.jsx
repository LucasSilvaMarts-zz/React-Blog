import './settings.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

const Settings = () => {
  return (
    <section className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfilePicture">
              <img
                src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsProfilePictureIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Marts" />
            <label>Email</label>
            <input type="email" placeholder="devMarts@DevMarts.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
      </div>
      <Sidebar />
    </section>
  )
}

export default Settings;
