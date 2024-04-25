import React from 'react'
import { Link } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div>
      <button><Link to='user'>User</Link></button>
      <button><Link to='table'>Table</Link></button>
    </div>
  )
}

export default App