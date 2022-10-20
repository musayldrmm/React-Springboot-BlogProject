import { Link } from "react-router-dom";
import React from 'react';
const homepage = (props) => {
  return (
    <section className="details-card">
      <div className="container">
        <div className="row">
         {props.content.map((content) =>(
          <div className="col-md-4 mt-5" key={content.id}>
              <div className="card-content">
                <div className="card-img">
                  <img src={content.imageUrl} alt="" />
                </div>
                <div className="card-desc">
                  <h3>{content.title}</h3>
                  <p>
                   {content.description}
                  </p>
                  <Link to= {`/content/${content.id}`} className="btn-card">
                    Read
                  </Link>
                </div>
              </div>
            </div>
         ))}
        </div>
      </div>
    </section>
  );
};
export default homepage;
