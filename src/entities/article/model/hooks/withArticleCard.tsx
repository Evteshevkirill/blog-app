import React, { JSX } from 'react'
import { format } from 'date-fns'

import { IUiArticleCardProps } from '../../index'

const withArticleCard = <T extends object>(
  Component: React.ComponentType<IUiArticleCardProps>
): ((props: T & IUiArticleCardProps) => JSX.Element) => {
  return function (props) {
    const { createdAt } = props

    const date = new Date(createdAt)
    const formattedDate = format(date, 'MMMM dd, yyyy')

    return <Component {...props} createdAt={formattedDate} />
  }
}

export default withArticleCard
