import Comment from "./itemComponent/comment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const Contentpage = (props) => {
  let id = useParams();
  const longid = Number(id.id);
  const [content, setContent] = useState();
  const [logininfo, setlogininfo] = useState();
  const [isFetched, setIsFetched] = useState(false);

  async function getData() {
    const data = await Axios.get(
      `http://localhost:8080/post/find-post/${longid}`
    )
      .then((promise) => {
        return promise.data;
      })
      .catch((e) => {
        console.error(e);
      });
    return data;
  }
  useEffect( ()=> {
    const Data = window.localStorage.getItem("logininfo");
    setlogininfo(Data);
    (async () => {
      const newData = await getData();
      setContent(newData);
      setIsFetched(true)
    })();
  }, []);

  function loader () {
    const fetch = isFetched
    if (isFetched == true) {
      return (
        <article>
          <header className="mb-4">
            <h1 className="fw-bolder mb-1">{content.title}!</h1>
            <div className="text-muted fst-italic mb-2">
              Posted on {content.creationDate} by <b>{content.user.name}</b>
            </div>
          </header>
          <figure className="mb-4">
            <img
              className="img-fluid rounded"
              src={content.imageUrl}
              alt="..."
            />
          </figure>
          <section className="mb-5">
            <p className="fs-5 mb-4">{content.description}</p>
          </section>
        </article>
      );
    } else {
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>;
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="col-lg-8">{loader()}</div>
          <Comment login={props.logininfo} />
        </div>
      </div>
    </div>
  );
};

export default Contentpage;
