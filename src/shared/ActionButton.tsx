import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

AnchorLink

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink 
        className="rounded-full text-white bg-primary px-10 py-3 hover:bg-primary-300 hover:text-white cursor-pointer"
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton