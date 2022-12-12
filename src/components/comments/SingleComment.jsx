function SingleComment(props) {
  //data ir laika normaliu fomratu
  //   const date = props.commentData.date.split('T');
  const date = new Date(props.commentData.date).toLocaleString('lt-LT');
  console.log('date ===', date);

  return (
    <li key={props.commentData.id}>
      <h3>{props.commentData.author}</h3>
      <p>Date: {date}</p>
      <p>{props.commentData.text}</p>
    </li>
  );
}
export default SingleComment;
