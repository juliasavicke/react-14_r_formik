import AddPostForm from '../components/AddPostForm';

function AddPostPage(props) {
  //kai sekmingai nusiusta mes norim naviguoti i PostsPage su react router
  /**
   * image
   * title
   * body
   * reactions
   */
  return (
    <div>
      <AddPostForm />
    </div>
  );
}
export default AddPostPage;
