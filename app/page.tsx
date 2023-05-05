import { action } from "./_actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form action={action}>
      <input type="text" name="name" />
      <button type="submit">Hello</button>
    </form>
  );
}
