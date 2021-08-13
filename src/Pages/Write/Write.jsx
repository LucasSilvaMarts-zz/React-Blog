import './write.css';

const Write = () => {
  return (
    <section className="write">
      <img
        src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
        alt=""
        className="writeImage"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}/>
          <input type="text" placeholder="title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText">
          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </section>
  );
}

export default Write;
