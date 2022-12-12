import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SinglePost(props) {
  const history = useHistory();

  function deleteTriger() {
    props.onDelete(props.postData.id);
  }
  console.log('props ===', props);
  return (
    <article key={props.postData.id} className='singlePost'>
      {props.postData.image && (
        <img
          onClick={() => history.push(`/posts/${props.postData.id}`)}
          src={props.postData.image}
          alt='post image'
        />
      )}
      {!props.postData.image && <img src='https://placehold.co/400'></img>}
      <h3>{props.postData.title}</h3>
      <p className='singleBody'>{props.postData.body}</p>
      <p className='reactions'>reactions: {props.postData.reactions}</p>
      <p className='reactions'>author: {props.postData.userId}</p>
      <ul>
        {props.postData.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {props.isSingle ? (
        <button onClick={() => history.push('/posts')}>
          &lt;&lt;&lt; Go back
        </button>
      ) : (
        <Link to={`/posts/${props.postData.id}`}>Read more &gt;&gt;</Link>
      )}
      {!props.isSingle && <button onClick={deleteTriger}>Delete post</button>}
    </article>
  );
}
export default SinglePost;
