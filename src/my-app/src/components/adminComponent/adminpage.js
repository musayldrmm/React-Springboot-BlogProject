import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Adminpage = (props) => {
  const deletePost = (value) => {
    const accestoken = JSON.parse(window.localStorage.getItem("logininfo"));
    const configHeaders = {
      Authorization: accestoken.accestoken,
    };
    Axios.delete(`http://localhost:8080/post/remove-post/${Number(value)}`,{
      headers: configHeaders
    })
      .then(window.location.reload())
      .catch((err) => alert(err));
  };
  return (
    <React.Fragment>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map((content) => (
            <tr key={content.id}>
              <th scope="row">{content.id}</th>
              <td>{content.title}</td>
              <td>{content.user.name}</td>
              <td>
                <Link
                  to={`/adminPage/editPost/${content.id}`}
                  className="btn btn btn-warning"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={(event) => deletePost(content.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Adminpage;
