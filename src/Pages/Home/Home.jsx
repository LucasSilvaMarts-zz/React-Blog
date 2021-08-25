import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './home.css'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
   const fetchPosts = async () => {
    const res = await axios.get('/posts' + search);
    setPosts(res.data);
   }
   fetchPosts();
  }, [search])

  return (
    <>
    <Header />
    <section className="home">
      <Posts posts={ posts }/>
      <Sidebar />
    </section>
    </>
  )
}

export default Home;
