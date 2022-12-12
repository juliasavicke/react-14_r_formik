import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import { getCurrentPostFromDb } from '../helper/helper';
import CommentsList from '../components/comments/CommentsList';

function SinglePostPage(props) {
  const [currentPost, setPosts] = useState({});
  const allParams = useParams();
  const currentPostId = allParams.postId;
  const history = useHistory();

  useEffect(() => {
    getCurrentPostFromDb(currentPostId).then((dataInJs) => {
      setPosts(dataInJs);
    });
  }, []);
  console.log('currentPost ===', currentPost);
  return (
    <div>
      {currentPost.id && (
        <>
          <SinglePost postData={currentPost} isSingle />{' '}
          <CommentsList postId={props.id} />
        </>
      )}
    </div>
  );
}
export default SinglePostPage;
