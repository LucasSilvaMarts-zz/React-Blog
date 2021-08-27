import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './singlePost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const publicFolder = "http://localhost:3001/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${ post._id }`, {
        data: { username: user.username }
      });
      window.location.replace("/");
    } catch (err) {

    }
  }
  return (
    <section className="singlePost">
      <div className="singlePostWrapper">
        { post.photo && (
          <img
          src={ publicFolder + post.photo }
          alt="PostImage"
          className="singlePostImg"
        />
        ) }
        <h1 className="singlePostTitle">
          { post.title }
          { post.username === user.username && (
            <div className="editPost">
              <i className="singlePostIcon fas fa-pen-square"></i>
              <i className="singlePostIcon fas fa-trash-alt" onClick={ handleDelete }></i>
            </div>
          ) }
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:
              <Link to={`/?user=${ post.username }` } className="link">
                <b>{ post.username }</b>
              </Link>
            </span>
            <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className="singlePostDesc">
          { post.description }
        </p>
      </div>
    </section>
  )
}

export default SinglePost;
