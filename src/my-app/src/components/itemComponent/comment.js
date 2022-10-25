import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const Comment = (props) => {
  let id = useParams();
  const longid = Number(id.id);
  const [comment, commentfunc] = useState();
  useEffect(() => {
    Axios.get(`http://localhost:8080/comment/find-comment/${longid}`).then(
      (response) => {
        commentfunc(response.data);
      }
    );
  }, []);
  const addComment=(event)=>{
    let commentData  = {
      comment:"",
      post:{
        id:0
      },
      user:{
        id:0
      }
    }
    const userinfo = JSON.parse(window.localStorage.getItem("logininfo"));
    commentData.comment=document.getElementById("comment").value
    commentData.post.id=longid
    commentData.user.id=Number(userinfo.userid)
    commentfunc(comment=>[...comment,commentData])

    const configHeaders = {
      Authorization: userinfo.accestoken,
    };

    Axios.post("http://localhost:8080/comment/save", commentData, {
      headers:configHeaders
    })
      .then(window.location.reload())
      .catch(console.error());

  }

  const logincheck = (props) => {
    if (props.login.islogged == true) {
      return (
        <React.Fragment>
          <textarea
            className="form-control mt-4"
            rows="3"
            placeholder="Join the discussion and leave a comment!"
            id="comment"
          ></textarea>
          <button
            type="button"
            style={{
              float: "right",
              marginTop: "10px",
              width: "150px",
            }}
            className="btn btn-success"
            onClick={(event) =>addComment(event)}
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
        {comment?.map((comment) => (
        <div className="d-flex mb-4 mt-5">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
              alt="..."
            />
          </div>
      
            <div className="ms-3" key={comment.id}>
              <div className="fw-bold" >
                {comment.user.name}
              </div>
              {comment.comment}
            </div>
        
        </div>
        ))}
        <div className="d-flex"></div>
      </div>
    </div>
  );
};
export default Comment;
