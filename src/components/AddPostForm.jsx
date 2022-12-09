import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from './InputError';
function stringTagsToArr(str) {
  return str
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length);
}
function AddPostForm(props) {
  const formik = useFormik({
    initialValues: {
      image: 'https://picsum.photos/29/1/200/300',
      title: 'Home sweet Home',
      tags: [],
      tagsStringInput: '',
      body: 'Post about the mountains...',
      reactions: 1,
      userId: 15,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string()
        .min(5, 'ne maziau nei 5 simboliai')
        .max(120)
        .required(),
      title: Yup.string().min(3).max(25).required(),
      tagsStringInput: Yup.string().min(3),
      body: Yup.string().min(15).required(),
      reactions: Yup.number().positive().integer().max(15),
      userId: Yup.number().positive().integer().min(1).max(15),
    }),
    onSubmit: (values) => {
      //   console.log('values ===', values);
      values.tags = stringTagsToArr(values.tagsStringInput);
      //   const tags = values.tags.split(', ');
      //   console.log('tags ===', tags);

      //siusti duomenis su fetch
      sendDataFetch(values).then((data) => console.log('data ===', data));

      //jei sekmingai nusiuntem tai console.log sekme
      //sekmes atveju mes norim naviguoti i PostsPage su react router navigacija is AddPostsPage
      //jei ne tai nesekme
    },
  });

  function sendDataFetch(values) {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => data)

      .then(console.warn);
  }
  console.log('formik.touched ===', formik.touched);

  function getErrorClass(touched, err) {
    if (touched && err) {
      return 'inputErrField';
    }
  }
  console.log('getErrorClass ===', getErrorClass());

  return (
    <div>
      <h1>Add Post Page</h1>
      <div className='grid'>
        <form onSubmit={formik.handleSubmit} className='form'>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            className={
              formik.values.image.length &&
              formik.touched.image &&
              formik.errors.image &&
              `${getErrorClass(formik.touched.image, formik.errors.image)}`
            }
            type='text'
            placeholder='Image'
            name='image'
          />
          {formik.errors.image && formik.touched.image && (
            <InputError err={formik.errors.image} />
          )}
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={
              formik.values.title.length &&
              formik.touched.title &&
              formik.errors.title &&
              `${getErrorClass(formik.touched.title, formik.errors.title)}`
            }
            type='text'
            placeholder='Title'
            name='title'
          />
          {formik.touched.title && formik.errors.title && (
            <InputError err={formik.errors.title} />
          )}
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tagsStringInput}
            className={
              formik.values.tagsStringInput.length &&
              formik.touched.tagsStringInput &&
              formik.errors.tagsStringInput &&
              `${getErrorClass(
                formik.touched.tagsStringInput,
                formik.errors.tagsStringInput
              )}`
            }
            type='text'
            placeholder='Tags'
            name='tagsStringInput'
          />
          {formik.touched.tagsStringInput && formik.errors.tagsStringInput && (
            <InputError err={formik.errors.tagsStringInput} />
          )}
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            className={
              formik.values.body.length &&
              formik.touched.body &&
              formik.errors.body &&
              `${getErrorClass(formik.touched.body, formik.errors.body)}`
            }
            name='body'
            cols='30'
            rows='10'
            placeholder='Body'
          ></textarea>

          {formik.touched.body && formik.errors.body && (
            <InputError err={formik.errors.body} />
          )}
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reactions}
            className={
              formik.values.reactions.length &&
              formik.touched.reactions &&
              formik.errors.reactions &&
              `${getErrorClass(
                formik.touched.reactions,
                formik.errors.reactions
              )}`
            }
            type='number'
            placeholder='Reactions'
            name='reactions'
          />
          {formik.touched.reactions && formik.errors.reactions && (
            <InputError err={formik.errors.reactions} />
          )}
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userId}
            className={
              formik.values.userId.length &&
              formik.touched.userId &&
              formik.errors.userId &&
              `${getErrorClass(formik.touched.userId, formik.errors.userId)}`
            }
            type='number'
            name='userId'
            disabled
          />
          {formik.touched.userId && formik.errors.userId && (
            <InputError err={formik.errors.userId} />
          )}
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
}
export default AddPostForm;
