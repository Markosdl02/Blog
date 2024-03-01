import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Posts" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Posts" ? "selected" : ""}>
        Add
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Post
      </a>
    </div>
  );
};

export default Menu;