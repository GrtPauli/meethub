import { Image } from "antd";
import React from "react";

const Features = () => {
  return (
    <div className="2xl:flex items-center justify-center p-10 md:p-14 cus-xs:!p-5 bg-default">
      <div className="grid grid-cols-3 cus-md3:grid-cols-2 cus-sm2:!grid-cols-1 gap-8 w-full">
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
      <div className="px-8 pb-5 pt-8 cus-sm2:px-5 cus-sm2:pt-5 text-white">
        <h1 className="mb-1 text-xl cus-sm:text-lg cus-sm2:text-base font-bold">{title}</h1>
        <p className="text-base cus-sm:text-sm cus-sm2:text-xs font-light leading-relaxed">{description}</p>
      </div>

      <Image preview={false} src={imgSrc} width="100%" height="80%" />
    </div>
  );
};
