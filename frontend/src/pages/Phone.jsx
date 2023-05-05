const Phone = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body grid gap-5'>
          <h2 className='card-title'>Phone Number Required!!</h2>
          <input
            type='text'
            placeholder='Phone Number'
            className='input input-bordered w-full max-w-xs'
          />

          <button className='btn flex gap-3 btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Phone
