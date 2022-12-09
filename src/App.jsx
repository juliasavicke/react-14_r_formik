import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Route path={'/posts-page'} exact>
        <PostsPage />
      </Route>
      <Route path={'/add-post'} exact>
        <AddPostPage />
      </Route>
      <Route path={'/'} exact>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
