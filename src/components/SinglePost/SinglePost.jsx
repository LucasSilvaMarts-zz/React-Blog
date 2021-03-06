import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './singlePost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  const publicFolder = "http://localhost:3001/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${ post._id }`, {
        data: { username: user.username }
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${ post._id }`, {
        username: user.username,
        title,
        description,
      });
     setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <section className="singlePost">
      <div className="singlePostWrapper">
        { post.photo && (
          <img
          src={ publicFolder + post.photo }
          alt="PostImage"
          className="singlePostImg"
        />
        ) }{
          updateMode ? (
            <input
              type="text"
              value={ title }
              className="singlePostTitleInput"
              autoFocus
              onChange={ (e) => setTitle(e.target.value) }
            />
            ) : (

          <h1 className="singlePostTitle">
            { title }
            { post.username === user.username && (
              <div className="editPost">
                <i className="singlePostIcon fas fa-pen-square" onClick={ () => setUpdateMode(true) }></i>
                <i className="singlePostIcon fas fa-trash-alt" onClick={ handleDelete }></i>
              </div>
            ) }
          </h1>
          )
        }
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:
              <Link to={`/?user=${ post.username }` } className="link">
                <b>{ post.username }</b>
              </Link>
            </span>
            <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
        </div>
        { updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          />
          ) : (
          <p className="singlePostDesc">
            { description }
          </p>
        ) }
        { updateMode && (
          <button
            className="singlePostUpdateButton"
            onClick={ handleUpdate }
          >
            Update
          </button>
          ) }
      </div>
    </section>
  )
}

export default SinglePost;
