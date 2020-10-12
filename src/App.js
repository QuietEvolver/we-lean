import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';
//.models user/card

const App = () => {
  //seed data  -> ./db/seeds.db
  const usersData = [
    { id: 1, name: 'testOne', userName: 'uNmtestOne' },
    { id: 2, name: 'testTwo', userName: 'uNmtestTwo' },
    { id: 3, name: 'testThree', userName: 'uNmtestThree' },
  ]

  const initiatFormState = { id: null, name: '', userName: '' };

  //Setting states
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initiatFormState);
  const [editing, setEditing] = useState(false); //set state staged for Effecthook v. componendDidUpdates. ln54 && Editform.

  //CRUDops
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setEditing(false)

    setUsers(users.filter((user) => user.id !== id))
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (

    <div className="container">
      <h1>HooksCRUD - for now ONLY VERA slow and steady wins the race</h1>

      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;