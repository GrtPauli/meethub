import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'
import { Logo } from '@calcom/ui'
import { useThemeContext } from 'context/ThemeContext'
import { Button } from '@calcom/ui'

export const Navbar = () => {
  const {theme} = useThemeContext()

  return (
    <div className="bg-default px-12 flex justify-between items-center">
      <div className="flex items-center gap-12">
        <Logo theme={theme} small inline={false}/>
        <div className="flex gap-8 items-center text-default mt-1">
          <Link href=""> 
            <p className="font-regular">Pricing</p>
          </Link>

          <Link href="">
            <p className="font-regular">Product</p>
          </Link>

          <Link href="/browse/agents">
            <p className="font-regular">Blogs</p>
          </Link>

          <Link href="">
            <p className="font-regular">Help</p>
          </Link>
        </div>
      </div>

      <div className="flex gap-5">
          <Button
              color="primary"
              className='!px-8'
          >
              Sign In
          </Button>

          <Button
              color="secondary"
          >
              Get Started
          </Button>
      </div>
    </div>
  )
}