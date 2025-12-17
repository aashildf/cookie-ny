import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  // State for listen over brukere
  const [users, setUsers] = useState(mockData);

  // State for input-feltene
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="users-container">
      <h2>Users</h2>

      {/* Liste over brukere */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>

      {/* Input for ny bruker */}
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => {
            if (username && email) {
              // Legg til ny bruker i listen
              setUsers([...users, { username, email }]);
              // Nullstill input-feltene
              setUsername("");
              setEmail("");
            }
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
}

export default Users;
