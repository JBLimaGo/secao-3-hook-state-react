import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["JB", "Pedro", "Jesus"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Jesus", age: 37 },
    { id: 2, name: "JB", age: 32 },
  ]);

  const deleteRadom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      console.log(prevUsers);

      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

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

      <button onClick={deleteRadom}> Deleta Valor da Lista</button>
    </div>
  );
};

export default ListRender;
