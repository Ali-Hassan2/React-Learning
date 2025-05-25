import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const FileC = () => {

  const user = useContext(UserContext);
  return (
    <div>
      {user.name}
    </div>
  )
}

export default FileC
