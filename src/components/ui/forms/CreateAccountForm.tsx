import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

import { usePostRegistrationMutation } from '../../api'

import { UserFormComponent, EmailInput, PasswordInput, UserNameInput, RepeatPasswordInput } from './UserFormComponent'

import { IUserInfo } from '../../types'

import classes from './stylesForms.module.scss'

export const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors: errorsValidate, isValid },
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange', shouldUnregister: false })

  const navigate = useNavigate()

  const [mutate, { isLoading, isSuccess, error: errorApi }] = usePostRegistrationMutation<IUserInfo>()

  const validate = (value) => {
    if (value !== getValues('password')) {
      return 'Пароли не совпадают'
    }
    return true
  }

  const onSubmit = async (user: FieldValues) => {
    await mutate(user)
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/sign-in')
    }
  }, [isSuccess, navigate])

  return (
    <UserFormComponent
      title="Sign Up"
      submitText="Sign Up"
      callText="Already have an account? "
      linkText="Sign In"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errorName={errorApi}
      load={isLoading}
      isSuccess={isSuccess}
      isValid={isValid}
    >
      <UserNameInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} />
      <EmailInput register={register} errorsValidate={errorsValidate} errorApi={errorApi} />
      <PasswordInput register={register} errorsValidate={errorsValidate} validate={validate} label="Password" />
      <RepeatPasswordInput
        register={register}
        errorsValidate={errorsValidate}
        validate={validate}
        label="Repeat Password"
      />
      <div className={classes['form__checkbox-wrapper']}>
        <div className={classes.form__checkbox}>
          <input
            type="checkbox"
            {...register('agree', {
              required: true,
            })}
          />
          <label>I agree to the processing of my personal information</label>
        </div>
      </div>
    </UserFormComponent>
  )
}
