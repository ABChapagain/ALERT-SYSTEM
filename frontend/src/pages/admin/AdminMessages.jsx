import React from 'react'
import { FiPlus, FiEye, FiEdit, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const AdminMessages = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen'>
      <div className='my-10 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>PreDefined Messages</h1>
        <Link to='/admin/messages/create' className='btn btn-primary'>
          <FiPlus className='mr-2' /> Create Message
        </Link>
      </div>

      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <Link to={`/admin/messages/id`} className='btn btn-ghost mr-2'>
                  <FiEye />
                </Link>
                <Link
                  to={`/admin/messages/id/edit`}
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminMessages
