import { Link } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
  const publicFolder = "http://localhost:3001/images/";
  return (
    <div className="post">
      {
        post.photo && (
        <img
          className="postImg"
          src={ publicFolder + post.photo }
          alt=""
        />
        )
      }
      <div className="postInfo">
        <div className="postCats">
          { post.categories.map((category) => (
            <span className="postCat">{ category.name }</span>
          )) }

        </div>
        <Link to={ `/post/${post._id}` } className="link">
          <span className="postTitle">
            { post.title }
          </span>
        </Link>
        <hr />
        <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
      </div>
      <p className="postDesc">
        { post.description }
      </p>
    </div>
  )
}

export default Post;
