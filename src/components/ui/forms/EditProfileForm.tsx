/* eslint-disable react-hooks/exhaustive-deps */
import { FieldValues, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { user, usePutEditProfileUserMutation } from '../../api'
import { IUserInfo } from '../../types'
import { UserFormComponent, UserNameInput, EmailInput, PasswordInput, URLInput } from './UserFormComponent'

export const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: errorsValidate, isValid },
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange', shouldUnregister: false })

  const navigate = useNavigate()

  const [mutate, { isLoading, error: errorApi, data, isSuccess }] = usePutEditProfileUserMutation<IUserInfo>()

  const onSubmit = async (user: FieldValues) => {
    if (user.password === '') {
      delete user.password
      await mutate(user)
    }
    await mutate(user)
  }

  useEffect(() => {
    if (isSuccess) {
      document.cookie = `User=${encodeURIComponent(JSON.stringify(data.user))}; path=/`
      navigate('/')
      window.location.reload()
    }
  }, [isSuccess])

  return (
    <UserFormComponent
      title="Edit Profile"
      submitText="Save"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errorName={errorApi}
      load={isLoading}
      isSuccess={isSuccess}
      isValid={isValid}
    >
      <UserNameInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} value={user?.username} />
      <EmailInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} value={user?.email} />
      <PasswordInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} label="New Password" />
      <URLInput register={register} errorsValidate={errorsValidate} value={user?.image} />
    </UserFormComponent>
  )
}
