import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Switch>
        <Route path={'/posts/:postId'} exact>
          <SinglePostPage />
        </Route>
        <Route path={'/posts'} exact>
          <PostsPage />
        </Route>
        <Route path={'/add-post'} exact>
          <AddPostPage />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
