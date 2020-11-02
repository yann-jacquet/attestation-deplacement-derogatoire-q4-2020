import { useState } from 'react'

const useUserManagement = () => {
  const getLocalStorageData = () => JSON.parse(localStorage.getItem('users'))
  const setLocalStorageData = (data) => localStorage.setItem('users', JSON.stringify(data))
  const [users, setUsers] = useState(getLocalStorageData() || [])

  const addNewUser = (user) => {
    const newUsers = users.concat([user])

    setUsers(newUsers)
    setLocalStorageData(newUsers)
  }

  const saveUser = (user) => {
    const userIndex = users.findIndex(el => el.firstname === user.firstname && el.birthday === user.birthday)

    if (userIndex !== -1) {
      let newUsers = [...users]
      newUsers[userIndex] = user

      setUsers(newUsers)
      setLocalStorageData(newUsers)
    } else {
      addNewUser(user)
    }
  }

  const deleteUser = () => {}

  const getUsers = () => users

  const getUserInfo = (userIndex) => users[userIndex]

  return {
    addNewUser,
    saveUser,
    deleteUser,
    getUsers,
    getUserInfo,
  }
}

export default useUserManagement