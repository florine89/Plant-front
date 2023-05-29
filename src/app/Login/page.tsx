"use client";

import { FC, useState, ChangeEvent } from 'react'

interface loginProps {

}

const Login: FC<loginProps> = ({}) => {

  const [ input, setInput ] = useState({
    email:'',
    password:''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput((prev) => ({...prev, [name]: value}))

  }

  return (
  <div>
    <input type="text" placeholder='email' value={input.email} onChange={handleChange}/>
    <input type="text" placeholder='password' value={input.password} onChange={handleChange}/>
    <button type='button'>Sign In</button>
  </div>)
}

export default Login;