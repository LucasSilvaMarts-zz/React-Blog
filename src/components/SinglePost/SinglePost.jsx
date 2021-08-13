import './singlePost.css';

const SinglePost = () => {
  return (
    <section className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
          alt="PostImage"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem Ipsum Dolor Sit Amet
          <div className="editPost">
            <i className="singlePostIcon fas fa-pen-square"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Marts</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat odio justo, in semper sem consectetur sed. Curabitur varius metus a elit blandit, sit amet interdum velit aliquet. Curabitur tempus justo ac turpis placerat bibendum. Nunc convallis tellus a quam imperdiet rhoncus. In fringilla massa nec felis elementum, ac rutrum purus sagittis. Donec venenatis mi eget augue aliquet aliquet. In vitae arcu pharetra odio commodo dignissim a eu ipsum. Proin id libero turpis.
        Etiam congue placerat eros, non pretium diam porttitor at. Aenean interdum commodo felis sed tempus. Aliquam consectetur ligula ut consequat ullamcorper. Nunc fermentum eu eros sit amet posuere. Duis eget metus massa. Nunc sed hendrerit dui, at consequat tellus. Mauris hendrerit ante eget dolor mattis, sit amet tincidunt leo tincidunt. Fusce nisi turpis, tincidunt ut risus ut, luctus aliquet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </section>
  )
}

export default SinglePost;
