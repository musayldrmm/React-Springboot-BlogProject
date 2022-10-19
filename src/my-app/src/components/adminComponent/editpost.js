const editpost = props=>{
    return(
        <div className="container">
      <form className="mt-5">
        <input
          className="form-control"
          id="disabledInput"
          type="text"
          placeholder="Fill The Form To Add A Post.."
          disabled
        />
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputName">Title</label>
            <input type="text" className="form-control" name="name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageURL" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">description</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-success btn-block"
          value="Update Post"
        />
      </form>
    </div>
    )
}

export default editpost;