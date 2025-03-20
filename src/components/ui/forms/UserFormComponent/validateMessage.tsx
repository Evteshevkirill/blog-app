export const validateMessage = (errors, regName) => {
  if (errors[regName]) {
    return <p style={{ color: 'red' }}>{errors[regName].message && errors[regName]?.message}</p>
  }
  return null
}
