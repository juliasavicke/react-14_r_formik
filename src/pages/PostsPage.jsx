import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import { sendDeletePatch, getPostsFromDb } from '../helper/helper';

function PostsPage(props) {
  const [posts, setPosts] = useState({});

  function deletePostHandler(idOfPostToBeDeleted) {
    console.log('deletePostHandler called ', idOfPostToBeDeleted);
    sendDeletePatch(idOfPostToBeDeleted).then((deleteResult) => {
      console.log('deleteResult ===', deleteResult);
      if (deleteResult === true) {
        // parsisiusti naujus postus
        getLatestPosts();
      }
    });
  }

  useEffect(() => {
    getLatestPosts();
  }, []);

  function getLatestPosts() {
    getPostsFromDb().then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      setPosts(dataInJs);
    });
  }

  return (
    <div>
      <h1>Posts</h1>
      <p>here are some posts</p>
      <div className='grid'>
        {posts.length &&
          posts.map((pObj) => (
            <SinglePost
              key={pObj.id}
              postData={pObj}
              onDelete={deletePostHandler}
            />
          ))}
      </div>
    </div>
  );
}
export default PostsPage;
