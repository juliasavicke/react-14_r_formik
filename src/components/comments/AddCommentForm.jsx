import { prepareDataForValidation, useFormik } from 'formik';
import { sendFetch } from '../../helper/helper';
import * as Yup from 'yup';
import InputError from '../InputError';
function AddCommentForm(props) {
  //init values for form: author, text, date, postId

  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
      date: '',
      postId: props.postId,
    },
    validationSchema: Yup.object().shape({
      author: Yup.string().min(4).required(),
      text: Yup.string().min(10).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      //siusti duomenis su fetch
      values.date = new Date();
      console.log('values ===', values);
      sendFetch(values, 'comments').then((sendResult) => {
        console.log('sendResult ===', sendResult);
        if (sendResult.id) {
          props.onNewComment();
          resetForm();
        } else {
          // kazkas negerai nes neturim naujo komentaro id
        }
      });
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
        {formik.touched.author && formik.errors.author && (
          <InputError err={formik.errors.author} />
        )}
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
