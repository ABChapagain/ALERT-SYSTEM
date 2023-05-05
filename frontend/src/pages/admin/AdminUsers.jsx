import React from 'react'
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const AdminUsers = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen'>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/tailwind-css-component-profile-2@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className='text-sm opacity-50'>United States</div>
                  </div>
                </div>
              </td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>
                <Link
                  to={'/admin/users/id/edit'}
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
            {/* row 2 */}
            <tr className='hover'>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/tailwind-css-component-profile-2@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className='text-sm opacity-50'>United States</div>
                  </div>
                </div>
              </td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
              <td>
                <Link
                  to={'/admin/users/id/edit'}
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
            {/* row 3 */}
            <tr>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/tailwind-css-component-profile-2@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>Hart Hagerty</div>
                    <div className='text-sm opacity-50'>United States</div>
                  </div>
                </div>
              </td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
              <td>
                <Link
                  to={'/admin/users/id/edit'}
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

export default AdminUsers
