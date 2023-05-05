import { useAuth0 } from '@auth0/auth0-react'

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          src='https://th.bing.com/th/id/OIP.UPmZnNMfkCfKuL3iKpK0MgHaE7?pid=ImgDet&rs=1'
          alt='Shoes'
        />
      </figure>
      <div className='card-body grid gap-5'>
        <h2 className='card-title'>Get Alert on your Fingertip</h2>
        <p className=''>
          Register with google, add your phone and you are all done
        </p>
        <div className='card-actions justify-center'>
          <button
            className='btn flex gap-3 btn-primary'
            onClick={() => loginWithRedirect()}
          >
            <img
              className='w-5 h-5'
              src='https://th.bing.com/th/id/R.338e4330c1d4a44c0f780b21f62b1dc8?rik=fD23mr4B6VcP8w&pid=ImgRaw&r=0'
              alt='avatar'
            />
            Login With Auth0
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
