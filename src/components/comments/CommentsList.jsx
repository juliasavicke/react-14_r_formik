import { useState, useEffect } from 'react';
import { getCommentsFromDb } from '../../helper/helper';
import { useParams } from 'react-router-dom';
import SingleComment from './SingleComment';
function CommentsList(props) {
  //pasiimti post id useParams galima naudoti arba single post page paduoti per CommentsList props
  const allParams = useParams();
  const currentPostId = allParams.postId;
  //kreiptis su fetch parsisiusti komentarus
  const [comments, setComments] = useState({});

  useEffect(() => {
    getLatestComments();
  }, []);

  function getLatestComments() {
    getCommentsFromDb(currentPostId).then((dataInJs) => {
      setComments(dataInJs);
    });
  }
  console.log('comments ===', comments);

  //ir atvaizduoti

  //grazinti null jei komentaru nera
  if (comments.length) {
    return (
      <div>
        <h2>Read our comments</h2>
        <ul>
          {comments.length &&
            comments.map((cObj) => (
              <SingleComment commentData={cObj}></SingleComment>
            ))}
        </ul>
      </div>
    );
  } else return null;
}
export default CommentsList;
