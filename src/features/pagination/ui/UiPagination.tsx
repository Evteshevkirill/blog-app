import { Pagination } from 'antd'

import classes from './pagination.module.scss'

export function UiPagination() {
  return <Pagination className={classes.pagination} align="center" defaultCurrent={1} total={500} />
}
