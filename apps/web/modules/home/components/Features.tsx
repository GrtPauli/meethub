import { Image } from "antd";
import React from "react";

const Features = () => {
  return (
    <div className="bg-default grid grid-cols-3 gap-8 p-14">
      <FeatureItem
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus "
        imgSrc="/features/calendar.png"
        title="Connect Your Calendars"
      />

      <FeatureItem
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus "
        imgSrc="/features/availability.png"
        title="Customize Availability"
      />

      <FeatureItem
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, cumque? Vero quod laborum sapiente voluptatibus "
        imgSrc="/features/scheduling.png"
        title="Share Your Scheduling Link"
      />
    </div>
  );
};

export default Features;

interface FeatureItemProps {
  title: string;
  description: string;
  imgSrc: string;
}

const FeatureItem = ({ description, imgSrc, title }: FeatureItemProps) => {
  return (
    <div className="bg-brand-default overflow-hidden rounded-2xl shadow-xl">
      <div className="px-8 pb-5 pt-8 text-white">
        <h1 className="mb-1 text-xl font-bold">{title}</h1>
        <p className="text-base font-light leading-relaxed">{description}</p>
      </div>

      <Image preview={false} src={imgSrc} width="100%" height="80%" />
    </div>
  );
};
