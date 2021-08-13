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
                src="https://yt3.ggpht.com/yti/APfAmoGKjtF_QzM7hOKeELHoJlrhW2imGCw9lvhixef5JA=s108-c-k-c0x00ffffff-no-rj"
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
