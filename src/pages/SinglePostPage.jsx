import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import { getCommentsFromDb, getCurrentPostFromDb } from '../helper/helper';
import CommentsList from '../components/comments/CommentsList';
import AddCommentForm from '../components/comments/AddCommentForm';

function SinglePostPage(props) {
  const [currentPost, setPosts] = useState({});
  const allParams = useParams();
  const currentPostId = allParams.postId;
  const history = useHistory();

  const [comments, setComments] = useState({});

  useEffect(() => {
    getCommentsFromDb(currentPostId).then((commentsGot) =>
      setComments(commentsGot)
    );
  }, []);

  useEffect(() => {
    getCurrentPostFromDb(currentPostId).then((dataInJs) => {
      setPosts(dataInJs);
    });
  }, []);
  console.log('currentPost ===', currentPost);

  function handleNewComment() {
    console.log('handle new comment');
    getCommentsFromDb(currentPostId).then((commentsGot) =>
      setComments(commentsGot)
    );
  }

  return (
    <div>
      {currentPost.id && (
        <>
          <SinglePost postData={currentPost} isSingle />
          <CommentsList items={comments} postId={currentPostId} />
          <AddCommentForm
            onNewComment={handleNewComment}
            postId={currentPostId}
          />
        </>
      )}
    </div>
  );
}
export default SinglePostPage;
