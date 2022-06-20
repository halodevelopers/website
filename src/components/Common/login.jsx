import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './css/login.module.css'
import Spinner from './Spinner'
import clsx from 'clsx'



import { toast } from 'react-toastify'

import { login, reset } from '../../features/auth/authSlice'


function LoginForm() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => {
      return state.auth
    }
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/profile')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }
  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <div>
      <h4 className="text-center mb-4">Login</h4>
      <form onSubmit={onSubmit}>

        <div className="form-outline mb-3">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='Enter email or username' />
        </div>

        <div className="form-outline mb-3">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='password' />
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"

            className={clsx("btn", styles.btn)}>Login</button>
        </div>

        <p className="text-center text-muted mt-2 mb-0">Don't have account? <a href="#!" className="fw-bold text-body"><u>create here</u></a></p>

      </form>
    </div>
  )
}

export default LoginForm;