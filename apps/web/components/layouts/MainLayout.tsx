import React from "react";

import Footer from "@components/Footer";
import { MainHeader } from "@components/navbar/Index";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className="bg-muted h-full min-h-screen w-full">
      <MainHeader />
      <div className={className ? className : "bg-light-cultured-3 h-full pt-[60px]"}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
