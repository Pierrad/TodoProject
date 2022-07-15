import React from 'react'

import * as SC from './styled'

type LinkProps = {
  className?: string,
  to: string,
  children: React.ReactNode,
}

const Link = (props: LinkProps) => {
  const { className, to, children } = props

  return (
    <SC.Container to={to} className={className}>
      {children}
    </SC.Container>
  )
}

export default Link
