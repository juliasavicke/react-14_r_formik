import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';

function PostsPage(props) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPostsFromDb();
  }, []);

  async function getPostsFromDb() {
    try {
      const response = await fetch('/db/database.json');
      const dataInJs = await response.json();
      console.log('dataInJs ===', dataInJs);
      setPosts(dataInJs);
    } catch (error) {
      console.warn('did not get posts');
    }
  }
  console.log('posts ===', posts);

  return (
    <div>
      <h1>Posts</h1>
      <p>here are some posts</p>
      <div className='grid'>
        {posts.posts &&
          posts.posts.map((pObj) => <SinglePost postData={pObj} />)}
      </div>
    </div>
  );
}
export default PostsPage;
