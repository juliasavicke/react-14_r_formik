function SingleUser(props) {
  return (
    <li key={props.userData.id}>
      <h2>{props.userData.name}</h2>
      <p>{props.userData.age}</p>
      <p>{props.userData.town}</p>
      <p>{props.userData.id}</p>
    </li>
  );
}
export default SingleUser;
