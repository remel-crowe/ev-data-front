import "./Nav.scss";
import { FaBoltLightning } from "react-icons/fa6";

function Nav({ search, setSearch }) {
  function handleChange() {}

  return (
    <div className="nav">
      <ul className="nav_links">
        <li>
          <FaBoltLightning className="dark_mode" />
        </li>

        <li className="nav_link">
          <a>About</a>
        </li>
        <li className="nav_link">
          <a>All Cars</a>
        </li>
      </ul>
      <img
        src="/Black Minimalist Electrical Energy Logo.png"
        alt="comapny logo"
      ></img>
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
