import * as React from "react";
import Axios from "axios";

class Editpost extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      creationDate: "",
      description: "",
      imageUrl: "",
      id: "",
      user: "",
      isFetched: false,
    };
  }

  fetchData = async () => {
    const id = window.location.href.split("/")[5];
    const longid = Number(id);
    const accestoken = JSON.parse(window.localStorage.getItem("logininfo"));
    const configHeaders = {
      Authorization: accestoken.accestoken,
    };
    const data = await Axios.get(
      `http://localhost:8080/post/find-post/${longid}`,
      {
        headers: configHeaders,
      }
    );
    this.setState({
      title: data.data.title,
      creationDate: data.data.creationDate,
      description: data.data.description,
      imageUrl: data.data.imageUrl,
      id: data.data.id,
      user: data.data.user,
    });
    this.setState({ isFetched: true });
  };

  componentDidMount() {
    this.fetchData();
  }

  editContent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  putContent = () => {
    const accestoken = JSON.parse(window.localStorage.getItem("logininfo"));
    const configHeaders = {
      Authorization: accestoken.accestoken,
    };
    const content = {
      title: this.state.title,
      creationDate: this.setState.creationDate,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      id: this.state.id,
      user: this.state.user,
    };
    Axios.put("http://localhost:8080/post/update-post", content, {
      headers: configHeaders,
    })
      .then(()=>window.location.href="/")
      .catch(console.error());
  };

  loader() {
    if (this.state.isFetched == true) {
      return (
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
              <input
                type="text"
                onChange={this.editContent}
                value={this.state.title}
                className="form-control"
                id="title"
                name="title"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                onChange={this.editContent}
                value={this.state.imageUrl}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">description</label>
              <textarea
                onChange={this.editContent}
                className="form-control"
                value={this.state.description}
                name="description"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button
            onClick={this.putContent}
            type="button"
            className="btn btn-success"
          >
            Update Post
          </button>
        </form>
      );
    } else {
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>;
    }
  }

  render() {
    return <div className="container">{this.loader()}</div>;
  }
}

export default Editpost;
