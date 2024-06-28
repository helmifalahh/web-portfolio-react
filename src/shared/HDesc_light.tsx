import React from "react"

type Props = {
    children: React.ReactNode
}

const HDesc_Light = ({children}: Props) => {
  return (
    <div className='text-4xl text-primary-100 tracking-tighter font-reckless_neue'>{children}</div>
  )
}

export default HDesc_Light