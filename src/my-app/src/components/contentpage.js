import Contentitems from './itemComponent/content'
import Comment from './itemComponent/comment'
import {useParams} from 'react-router-dom'

const Contentpage = props=> {
  let id = useParams()
  const post = props.content.find(post => post.id === parseInt(id.id));
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
        <Contentitems post={post}/>
         <Comment login={props.logininfo} />
        </div>
      </div>
    </div>
  );
}

export default Contentpage;
