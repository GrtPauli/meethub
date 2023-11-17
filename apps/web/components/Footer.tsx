import { useThemeContext } from "context/ThemeContext";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

import { Logo } from "@calcom/ui";

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div className="bg-muted px-20 pb-5 pt-10">
      <div className="flex items-center justify-between">
        <Logo theme={theme} inline={false} className="-translate-x-5 " />
        <div className="text-default flex items-center gap-5 text-2xl">
          <FaTwitter />
          <AiFillInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>

      <div className="mb-10 mt-8 flex justify-between">
        <div>
          <h1 className="text-emphasis mb-3 text-2xl font-black">Teams</h1>
          <div className="text-default flex flex-col gap-2 font-light">
            <p>Sales</p>
            <p>Marketing</p>
            <p>Recruiting</p>
            <p>Customer Success</p>
            <p>Information Technology</p>
          </div>
        </div>

        <div>
          <h1 className="text-emphasis mb-3 text-2xl font-black">Industries</h1>
          <div className="text-default flex flex-col gap-2 font-light">
            <p>Technology</p>
            <p>Financial Services</p>
            <p>Education</p>
            <p>Professional Services</p>
          </div>
        </div>

        <div>
          <h1 className="text-emphasis mb-3 text-2xl font-black">Company</h1>
          <div className="text-default flex flex-col gap-2 font-light">
            <p>Customers</p>
            <p>About Us</p>
            <p>Leadership</p>
            <p>Careers</p>
          </div>
        </div>

        <div>
          <h1 className="text-emphasis mb-3 text-2xl font-black">Resources</h1>
          <div className="text-default flex flex-col gap-2 font-light">
            <p>Blog</p>
            <p>Resource Center</p>
            <p>Compare</p>
            <p>Become a Partner</p>
          </div>
        </div>

        <div>
          <h1 className="text-emphasis mb-3 text-2xl font-black">Connect</h1>
          <div className="text-default flex flex-col gap-2 font-light">
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Sign Up For Free</p>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
      </div>

      <div className="border-subtle flex w-full items-center justify-center border-t pt-5">
        <p className="text-default">Copyright MeetHub 2023</p>
      </div>
    </div>
  );
};

export default Footer;
