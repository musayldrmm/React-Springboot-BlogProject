import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const AddPost = (props) => {
  let id = useParams();
  const navigate = useNavigate();

  const contentPost = (event) => {
    const post = {
      title: "",
      imageUrl: "",
      description: "",
      creationDate: Date.now(),
      user: {
        id: 0,
      },
    };
    post.title = document.getElementById("title").value;
    post.description = document.getElementById("description").value;
    post.imageUrl = document.getElementById("imageURL").value;
    post.user.id = Number(id.id);

    Axios.post("http://localhost:8080/post/save", post, {
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token.accesToken,
      },
    })
      .then(navigate("/"))
      .catch(console.error());
  };

  return (
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
            <input type="text" className="form-control" id="title" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" id="imageURL" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">description</label>
            <textarea
              className="form-control"
              rows="5"
              id="description"
            ></textarea>
          </div>
        </div>
        <button
          onClick={(event) => contentPost(event)}
          type="button"
          className="btn btn-success"
        >
          AddPost
        </button>
      </form>
    </div>
  );
};

export default AddPost;
