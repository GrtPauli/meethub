import React from "react";

import { Navbar } from "./Navbar";

export const MainHeader = () => {
  return (
    <header className="header fixed z-50 w-full shadow-md">
      {/* {noBanner == false && <TopBanner />} */}
      <Navbar />
    </header>
  );
};
