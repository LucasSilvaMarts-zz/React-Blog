import Post from '../Post/Post';
import './posts.css';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      { posts.map((postData) => (
        <Post post={ postData }/>
      )) }

    </div>
  )
}

export default Posts;
