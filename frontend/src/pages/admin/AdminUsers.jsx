import React from 'react'
import { FiEdit, FiTrash, FiCheck, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SuchanaContext from '../../context/SuchanaContext'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminUsers = () => {
  const navigate = useNavigate()
  const { fetchUsers, users, currentUser } = useContext(SuchanaContext)

  useEffect(() => {
    if (currentUser === null) {
      //
    } else {
      if (
        currentUser?.role === 'local-admin' ||
        currentUser?.role === 'super-admin'
      ) {
        fetchUsers()
      } else {
        navigate('/')
      }
      console.log(currentUser)
    }
    // fetchUsers()
  }, [currentUser, navigate, fetchUsers])

  return (
    <div className='container mx-auto mt-10 min-h-screen'>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold'>Users</h1>
      </div>

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>{user.name}</div>
                      <div className='text-sm opacity-50'>{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  {currentUser?.role === 'super-admin' ? (
                    <>
                      <Link
                        to={`/admin/users/${user._id}/edit`}
                        className='btn btn-ghost mr-2'
                      >
                        <FiEdit />
                      </Link>
                      <Link
                        to={'/admin/users/delete/id'}
                        className='btn btn-ghost mr-2'
                      >
                        <FiTrash />
                      </Link>
                    </>
                  ) : currentUser.role === 'local-admin' ? (
                    <>
                      <Link
                        to={'/admin/users/delete/id'}
                        className='btn btn-ghost mr-2'
                      >
                        <FiCheck />
                      </Link>
                      <Link
                        to={'/admin/users/delete/id'}
                        className='btn btn-ghost mr-2'
                      >
                        <FiX />
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminUsers
