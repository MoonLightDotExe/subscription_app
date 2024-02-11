import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user_id, setUser_id] = useState('65c743fd45b60d3fb47d1f11')
  const [group_id, setGroup_id] = useState('')

  const storeUserId = async (user_id) => {
    try {
      await AsyncStorage.setItem('user_id', user_id)
      setUser_id(user_id)
    } catch (error) {
      console.error('Error storing user_id:', error)
    }
  }

  return (
    <UserContext.Provider
      value={{ user_id, setUser_id, storeUserId, group_id, setGroup_id }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
