import './single.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import SinglePost from '../../components/SinglePost/SinglePost';

const Single = () => {
  return (
    <section className="single">
      <SinglePost />
      <Sidebar />
    </section>
  )
}

export default Single;
