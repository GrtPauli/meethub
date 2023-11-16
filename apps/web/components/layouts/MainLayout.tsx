import Footer from '@components/Footer'
import { MainHeader } from '@components/navbar'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  className?: string
  noFooter?: boolean
}

const MainLayout: FC<IProps> = ({ children, className, noFooter = false }) => {
  return (
    <div className="w-full bg-muted h-full min-h-screen">
        <MainHeader />
        <div
            className={
                className ? className : 'bg-light-cultured-3 h-full pt-[60px]'
            }
        >
            {children}
        </div>
        <Footer/>  
    </div>
  )
}

export default MainLayout