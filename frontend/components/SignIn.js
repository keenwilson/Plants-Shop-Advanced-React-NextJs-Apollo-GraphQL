import Form from './styles/Form';

export default function SignIn() {
  return (
    <Form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" />
      </label>
    </Form>
  );
}
