import React from 'react'
import { Image } from 'antd'

const Features = () => {
  return (
    <div className="bg-default p-14 grid grid-cols-3 gap-8">
        <FeatureItem
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus '
            imgSrc='/features/calendar.png'
            title='Connect Your Calendars'
        />

        <FeatureItem
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus '
            imgSrc='/features/availability.png'
            title='Customize Availability'
        />

        <FeatureItem
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus '
            imgSrc='/features/scheduling.png'
            title='Share Your Scheduling Link'
        />
    </div>
  )
}

export default Features


interface FeatureItemProps {
    title: string
    description: string
    imgSrc: string
}

const FeatureItem = ({ description, imgSrc, title }: FeatureItemProps) => {

    return (
        <div className="bg-brand-default overflow-hidden rounded-2xl shadow-xl">
            <div className="px-8 pt-8 pb-5 text-white">
                <h1 className="font-bold text-xl mb-1">{title}</h1>
                <p className='text-base font-light leading-relaxed'>{description}</p>
            </div>

            <Image
                preview={false}
                src={imgSrc}
                width="100%"
                height="80%"
            />
        </div>
    )
}