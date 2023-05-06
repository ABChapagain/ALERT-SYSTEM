import React from 'react'
import { FiEye } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import SuchanaContext from '../../context/SuchanaContext'

const AdminAlert = () => {
  const navigate = useNavigate()
  const { fetchAlerts, alerts, currentUser } = useContext(SuchanaContext)

  useEffect(() => {
    if (currentUser === null) {
      //
    } else {
      if (
        currentUser?.role === 'authority-admin' ||
        currentUser?.role === 'super-admin'
      ) {
        fetchAlerts()
      } else {
        navigate('/')
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, navigate])

  return (
    <div className='container mx-auto mt-10 min-h-screen'>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>User</th>
              <th>User's Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts?.map((alert) => (
              <tr key={alert._id}>
                <td>{alert.title}</td>
                <td>{`${alert.location.lat}, ${alert.location.lang}`}</td>
                <td>{alert.user?.name}</td>
                <td>{alert.user?.phone}</td>
                <td>
                  <Link
                    to={`/alerts/${alert._id}`}
                    className='btn btn-ghost mr-2'
                  >
                    <FiEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAlert
