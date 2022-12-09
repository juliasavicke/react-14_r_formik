function SinglePost(props) {
  console.log('props ===', props);
  return (
    <article key={props.postData.id} className='singlePost'>
      {props.postData.image && (
        <img src={props.postData.image} alt='post image' />
      )}
      {!props.postData.image && <img src='https://placehold.co/400'></img>}
      <h3>{props.postData.title}</h3>
      <p className='singleBody'>{props.postData.body}</p>
      <p className='reactions'>reactions: {props.postData.reactions}</p>
      <p className='reactions'>author: {props.postData.userId}</p>
      <ul>
        {props.postData.tags.map((tag) => (
          <li key={tag.id}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
export default SinglePost;
