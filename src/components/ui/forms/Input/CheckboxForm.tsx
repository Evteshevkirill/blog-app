import { FieldValues, UseFormRegister } from 'react-hook-form'

export const CheckboxForm = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  return (
    <div>
      <input type="checkbox" {...register('agree')} />
      <label htmlFor="agree">I agree to the processing of my personal information</label>
    </div>
  )
}
