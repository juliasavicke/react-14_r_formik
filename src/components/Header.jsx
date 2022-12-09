import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='main-header'>
      <Link className={'nav-link logo'} to={'/'}>
        Logo
      </Link>
      <nav>
        <NavLink
          className={'nav-link'}
          to={'/'}
          activeClassName='currentPage'
          exact
        >
          Home
        </NavLink>
        <NavLink
          className={'nav-link'}
          to={'/posts-page'}
          activeClassName='currentPage'
        >
          Posts
        </NavLink>
        <NavLink
          className={'nav-link'}
          to={'/add-post'}
          activeClassName='currentPage'
        >
          Add Post
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
