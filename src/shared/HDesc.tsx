import React from "react"

type Props = {
    children: React.ReactNode
}

const HDesc = ({children}: Props) => {
  return (
    <div className='text-4xl text-primary-300 tracking-tighter font-reckless_neue'>{children}</div>
  )
}

export default HDesc