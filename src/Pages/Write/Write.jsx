import './write.css';

const Write = () => {
  return (
    <section className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="fas fa-plus"></i>
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
