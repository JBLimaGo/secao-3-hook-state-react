import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["JB", "Pedro", "Jesus"]);

  const [users] = useState([
    { id: 1, name: "Jesus", age: 37 },
    { id: 222222, name: "JB", age: 32 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}, {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
