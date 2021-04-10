import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const { register, handleSubmit, errors } = useForm()

  console.log(register)

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Email' name='email' {...register} />
      <input
        type='password'
        placeholder='Password'
        name='password'
        {...register({ required: 'password required', minLength: 8 })}
      />
      {/*errors.password && <p>{errors.password.message}</p>*/}
      <input type='submit' />
    </form>
  )
}
