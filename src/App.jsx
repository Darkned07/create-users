import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newuser/NewUserForm";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [showContent, setShowContent] = useState(false);
  // delete user

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowContent(false);
    if (e.key === "Escape") setShowContent(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowContent(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showContent && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowContent(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
