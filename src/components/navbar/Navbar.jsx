import "./navbar.css";

function navbar({ usersLength }) {
  return (
    <div className="navber">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">
          {usersLength > 0 ? "You have:" + usersLength : "No User :("}
        </h3>
      </div>
    </div>
  );
}

export default navbar;
