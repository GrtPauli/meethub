import React from 'react'
import { Logo } from '@calcom/ui'
import { useThemeContext } from 'context/ThemeContext'
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const {theme} = useThemeContext()

  return (
    <div className='px-20 pt-10 pb-5 bg-muted'>
        <div className='flex justify-between items-center'>
            <Logo theme={theme} inline={false} className='-translate-x-5 '/>
            <div className='flex items-center gap-5 text-2xl text-default'>
                <FaTwitter />
                <AiFillInstagram />
                <FaFacebook />
                <FaLinkedin />
                <FaYoutube />
            </div>
        </div>

        <div className='flex justify-between mt-8 mb-10'>
            <div>
                <h1 className='font-black text-emphasis text-2xl mb-3'>Teams</h1>
                <div className='font-light text-default flex flex-col gap-2'>
                    <p>Sales</p>
                    <p>Marketing</p>
                    <p>Recruiting</p>
                    <p>Customer Success</p>
                    <p>Information Technology</p> 
                </div>
            </div>

            <div>
                <h1 className='font-black text-emphasis text-2xl mb-3'>Industries</h1>
                <div className='font-light text-default flex flex-col gap-2'>
                    <p>Technology</p>
                    <p>Financial Services</p>
                    <p>Education</p>
                    <p>Professional Services</p>
                </div>
            </div>

            <div>
                <h1 className='font-black text-emphasis text-2xl mb-3'>Company</h1>
                <div className='font-light text-default flex flex-col gap-2'>
                    <p>Customers</p>
                    <p>About Us</p>
                    <p>Leadership</p>
                    <p>Careers</p>
                </div>
            </div>

            <div>
                <h1 className='font-black text-emphasis text-2xl mb-3'>Resources</h1>
                <div className='font-light text-default flex flex-col gap-2'>
                    <p>Blog</p>
                    <p>Resource Center</p>
                    <p>Compare</p>
                    <p>Become a Partner</p>
                </div>
            </div>

            <div>
                <h1 className='font-black text-emphasis text-2xl mb-3'>Connect</h1>
                <div className='font-light text-default flex flex-col gap-2'>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Sign Up For Free</p>
                    <p>Frequently Asked Questions</p>
                </div>
            </div>
        </div>

        <div className="w-full border-t border-subtle pt-5 flex items-center justify-center">
            <p className='text-default'>Copyright MeetHub 2023</p>
        </div>
    </div>
  )
}

export default Footer