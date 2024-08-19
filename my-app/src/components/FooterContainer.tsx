import React, { useState } from "react";
import logo from "../pictures/company-logo-bw.png"
import facebookLogo from "../pictures/facebook.png";
import instagramLogo from "../pictures/instagram.png"
import linkedinLogo from "../pictures/linkedin.png"
import twitterxLogo from "../pictures/twitterx.png"

const FooterContainer = () => {
    return (
        <div className="footer-container flex justify-between bg-black">
            <div className="content-center ml-4">
                <img src={logo}alt="company-logo" className="footer-logo content-center w-20 h-18 mx-auto flex justify-center" />
                <p className="text-center mb-4 text-white">see our social media</p>
                <div className="flex text-center justify-center">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookLogo} alt="a" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="b" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="c" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src={twitterxLogo} alt="d" className="m-1 w-8 h-8 hover:bg-slate-700 rounded-md"/>
                        </a>
                </div>
            </div>
            <div className="content-center text-white flex flex-col justify-center">
                <a href="#" className="m-1 hover:text-blue-500">Developer</a>
                <a href="#" className="m-1 hover:text-blue-500">Architecture</a>
                <a href="#" className="m-1 hover:text-blue-500">Docs</a>
                <a href="#" className="m-1 hover:text-blue-500">About Us</a>
            </div>
            <div className="mr-6 content-center text-white my-10 flex flex-col justify-center">
                <a href="#" className="m-1 hover:text-blue-500">Projects</a>
                <a href="#" className="m-1 hover:text-blue-500">Products</a>
                <a href="#" className="m-1 hover:text-blue-500">Company</a>
                <a href="#" className="m-1 hover:text-blue-500">Technology</a>
                <a href="#" className="m-1 hover:text-blue-500">Career</a>
                <a href="#" className="m-1 hover:text-blue-500">Address</a>
            </div>
        </div>
    )
}
export default FooterContainer