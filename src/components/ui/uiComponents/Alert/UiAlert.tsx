import { Alert } from 'antd'

export const UiAlert = ({
  message,
  description,
  type = 'error',
}: {
  message: string
  description?: string
  type?: 'success' | 'info' | 'warning' | 'error'
}) => {
  return <Alert style={{ whiteSpace: 'pre-wrap' }} message={message} description={description} type={type} closable />
}
