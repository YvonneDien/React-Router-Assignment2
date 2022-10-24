import React, { useState, useEffect,} from 'react'
import Pagination from './Pagination';
import UsersPage from './UsersPage'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  fetch('https://randomuser.me/api/?results=100')
  .then(res => {
     return res.json()
  })
  .then(data => {
    setUsers(data.results)
    setLoading(false);

  })
},[])
  
  return (
    <>
      {
        loading ? <h1 className="loading">Loading...</h1> :
        <Pagination
          data={users}
          pageLimit={5}
          dataLimit={10}
          RenderComponent={UsersPage}
        />
      }

    </>
  )
}
export default Users;