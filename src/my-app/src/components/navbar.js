import "../css/navbar.css";
import { Link } from "react-router-dom";
import React from "react";
const Navbar = (props) => {
  const logginCondition = (props) => {
    if (props.logininfo.islogged === true) {
      return (
        <button
          onClick={(event) => props.logout(event)}
          type="button"
          className="btn btn-danger"
        >
          Logout
        </button>
      );
    } else {
      return (
        <div>
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      );
    }
  };
  const roleCondition = (props) => {
    if (props.logininfo.userRole === "ADMIN") {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/adminPage">
              Admin-Page
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addPost">
              Add-Post
            </Link>
          </li>
        </React.Fragment>
      );
    } else if (props.logininfo.userRole === "USER") {
      return (
        <li className="nav-item">
          <Link className="nav-link" to={`/addPost/${props.logininfo.userid}`}>
            Add-Post
          </Link>
        </li>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Blog page
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          {roleCondition(props)}

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </ul>
      </div>

      <div>{logginCondition(props)}</div>
    </nav>
  );
};

export default Navbar;
