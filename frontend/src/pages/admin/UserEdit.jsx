import React from 'react'
import { useState } from 'react'

const UserEdit = () => {
  const [role, setRole] = useState('')

  return (
    <div className='hero min-h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body grid gap-5'>
          <h2 className='card-title'>Edit User Role</h2>
          <select
            className='select select-bordered w-full max-w-xs'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={''} disabled selected>
              Select a role
            </option>
            <option value={'local-admin'}>Local Admin</option>
            <option value={'authority-admin'}>Authority Admin</option>
          </select>

          <button className='btn flex gap-3 btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default UserEdit
