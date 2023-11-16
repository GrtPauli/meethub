import React from 'react'
import { TopBanner } from './TopBanner'
import { Navbar } from './Navbar'

interface Props {
  noBanner?: boolean
}

export const MainHeader: React.FC<Props> = ({ noBanner = false }) => {
  return (
    <header className="header fixed w-full shadow-md z-50">
      {/* {noBanner == false && <TopBanner />} */} 
      <Navbar /> 
    </header>
  )
}
