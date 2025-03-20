import { useForm, FieldValues } from 'react-hook-form'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { usePostLogInMutation } from '../../api'
import { useAuth } from '../../App/AuthContext'

import { UserFormComponent, EmailInput, PasswordInput } from './UserFormComponent'

export interface ILogInMutation {
  isLoading: boolean
  isSuccess: boolean
  error: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
  data: {
    user: {
      token: string
    }
  }
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: errorsValidate, isValid },
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange', shouldUnregister: false })

  const navigate = useNavigate()

  const [mutate, { isLoading, isSuccess, error: errorApi, data }] = usePostLogInMutation<ILogInMutation>()

  const { login } = useAuth()

  const onSubmit = (user: FieldValues) => {
    mutate(user)
  }

  useEffect(() => {
    if (data) {
      document.cookie = `User=${encodeURIComponent(JSON.stringify(data.user))}; path=/`
    }
  }, [data, login])

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
      login()
      window.location.reload()
    }
  }, [isSuccess, login, navigate])

  return (
    <UserFormComponent
      title="Sign In"
      submitText="Sign In"
      callText="Don't have an account? "
      linkText="Sign up"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errorName={errorApi}
      load={isLoading}
      isSuccess={isSuccess}
      isValid={isValid}
    >
      <EmailInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} />
      <PasswordInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} label="Password" />
    </UserFormComponent>
  )
}
