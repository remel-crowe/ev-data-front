import "./Nav.scss";

function Nav({ search, setSearch }) {
  function handleChange() {}

  return (
    <div className="nav">
      <ul className="nav_links">
        <li>L/D</li>
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
      />
    </div>
  );
}

export default Nav;
