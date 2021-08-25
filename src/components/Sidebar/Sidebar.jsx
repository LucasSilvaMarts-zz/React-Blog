import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/categories');
      setCategories(res.data);
    }
    getCategories();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://yt3.ggpht.com/yti/APfAmoGKjtF_QzM7hOKeELHoJlrhW2imGCw9lvhixef5JA=s108-c-k-c0x00ffffff-no-rj" alt="Hero" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut fermentum turpis.
        Suspendisse rhoncus ut libero eu vestibulum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          { categories.map((category) => (
            <li className="sidebarListItem">{ category.name }</li>
          )) }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
