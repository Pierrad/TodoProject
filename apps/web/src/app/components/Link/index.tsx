import React from 'react'

import * as SC from './styled'

type LinkProps = {
  to: string,
  children: React.ReactNode,
}

const Link = (props: LinkProps) => {
  const { to, children } = props

  return (
    <SC.Container to={to}>
      {children}
    </SC.Container>
  )
}

export default Link
