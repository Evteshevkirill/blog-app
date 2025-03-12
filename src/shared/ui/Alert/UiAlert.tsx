import { Alert } from 'antd'
import classes from './alert.module.scss'

export const UiAlert = ({ message }: { message: string }) => {
  return <Alert className={classes.alert} message={message} type="error" showIcon closable />
}
