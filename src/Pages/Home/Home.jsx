import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../Sidebar/Sidebar';
import './home.css'

const Home = () => {
  return (
    <>
    <Header />
    <section className="home">
      <Posts />
      <Sidebar />
    </section>
    </>
  )
}

export default Home;
