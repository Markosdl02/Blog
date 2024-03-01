import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add Post</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="text" name="context" placeholder="Context" />
      <button type="submit">Publish</button>
    </form>
  );
};

export default AddForm;