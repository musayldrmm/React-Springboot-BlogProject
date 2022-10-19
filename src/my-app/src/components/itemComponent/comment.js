import React from "react";
import { Link } from "react-router-dom";

const comment = (props) => {
  const logincheck = (props) => {
    if (props.login.islogged == true) {
      return (
        <React.Fragment>
          <textarea
            className="form-control mt-4"
            rows="3"
            placeholder="Join the discussion and leave a comment!"
          ></textarea>
          <button
            type="button"
            style={{
              float: "right",
              marginTop: "10px",
              width: "150px",
            }}
            className="btn btn-success"
          >
            Yorum yap{" "}
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <div className="form-control mt-4" rows="3">
          Yorum yapabilmek için lütfen{" "}
          <Link to="/register">üyelik oluşturunuz</Link> yada{" "}
          <Link to="/login">oturum açınız.</Link>
        </div>
      );
    }
  };
  return (
    <div className="card bg-light">
      <div className="card-body">
        <form className="mb-4">{logincheck(props)}</form>
        <div className="d-flex mb-4 mt-5">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="ms-3">
            <div className="fw-bold">Commenter Name</div>If you're going to lead
            a space frontier, it has to be government; it'll never be private
            enterprise. Because the space frontier is dangerous, and it's
            expensive, and it has unquantified risks.
          </div>
        </div>
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="ms-3">
            <div className="fw-bold">Commenter Name</div>When I look at the
            universe and all the ways the universe wants to kill us, I find it
            hard to reconcile that with statements of beneficence.
          </div>
        </div>
      </div>
    </div>
  );
};
export default comment;
