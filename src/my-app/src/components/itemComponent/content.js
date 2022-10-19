const content= props =>{
    return(
        <div className="col-lg-8">
        <article>
          <header className="mb-4">
            <h1 className="fw-bolder mb-1">{props.post.title}!</h1>
            <div className="text-muted fst-italic mb-2">
              Posted on {props.post.creationDate} by <b>{props.post.user.name}</b>
            </div>
          </header>
          <figure className="mb-4">
            <img
              className="img-fluid rounded"
              src={props.post.imageUrl}
              alt="..."
            />
          </figure>
          <section className="mb-5">
            <p className="fs-5 mb-4">
              {props.post.description}
            </p>
          </section>
        </article>
      </div>
    )
}

export default content;