import { prepareDataForValidation, useFormik } from 'formik';
function AddCommentForm(props) {
  //init values for form: author, text, date, postId

  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
      date: '',
      postId: props.postId,
    },
    // validationSchema: {},
    onSubmit: (values) => {
      //siusti duomenis su fetch
      values.date = new Date();
      console.log('values ===', values);
      //   sendDataFetch(values).then((data) => {
      //     console.log('data ===', data);
      //     if (data) {
      //       confirm('postas sukurtas');
      //       history.push('/posts');
      //     }
      //   });

      //jei sekmingai nusiuntem tai console.log sekme
      //sekmes atveju mes norim naviguoti i PostsPage su react router navigacija is AddPostsPage
      //jei ne tai nesekme
    },
  });

  //add formik to control the form
  return (
    <div className='card'>
      <h2>Add a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.author}
          onChange={formik.handleChange}
          type='text'
          name='author'
          placeholder='Author'
        />
        <input
          value={formik.values.text}
          onChange={formik.handleChange}
          type='text'
          name='text'
          placeholder='Text'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
export default AddCommentForm;
