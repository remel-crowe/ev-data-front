import "./Nav.scss";
import { MdOutlineDarkMode } from "react-icons/md";

function Nav({ search, setSearch }) {
  function handleChange() {}

  return (
    <div className="nav">
      <ul className="nav_links">
        <li>
          <MdOutlineDarkMode className="dark_mode" />
        </li>
        <li className="nav_link">
          <a>Home</a>
        </li>
        <li className="nav_link">
          <a>About</a>
        </li>
        <li className="nav_link">
          <a>All Cars</a>
        </li>
      </ul>
      <input
        type="text"
        className="nav_search"
        placeholder="Search by Model or Car"
        value={search}
        onChange={setSearch}
      />
    </div>
  );
}

export default Nav;
