import MainLayout from '@components/layouts/MainLayout'
import React from 'react'
import FavouriteApps from '~/home/components/FavouriteApps'
import GetStarted from '~/home/components/GetStarted'
import HomeHeroSection from '~/home/components/Hero'

const HomePage = () => {
  return (
    <MainLayout>
        <HomeHeroSection/>
        <FavouriteApps/>
        <GetStarted/>
    </MainLayout>
  )
}

export default HomePage