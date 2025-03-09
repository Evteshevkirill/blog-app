import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'

import classes from './spinner.module.scss'
export function UiSpinner() {
  return (
    <Flex align="center" gap="middle">
      <Spin className={classes.spinner} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  )
}
