import React from "react"

async function UsersPage(props: Props) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: IUser[] = await res.json();
  return (
    <div>
      Users
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
};

interface Props {
}

interface IUser {
  id: number;
  name: string;}

export default UsersPage;
