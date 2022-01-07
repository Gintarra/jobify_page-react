import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer d-flex column align-center" >
            <h1>Got a question?</h1>
            <h4>We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555</h4>
            <div className="d-flex" style={{width: "80%"}}>
            <div className="grow1">
                <img className="logo" src="https://pngimage.net/wp-content/uploads/2018/06/jobs-logo-png-7.png" alt=""/>
            <p>Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the process!</p>
            </div>
            <div className="grow1">
                <h2>Site Map</h2>
                <ul>
                    <li>Blog</li>
                    <li>Bookmarks</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <li>Companies</li>
                    <li>Companies List</li>
                </ul>
            </div>
                <div className="grow1">
                    <h2>Recent News Articles</h2>
                    <p>The Best (and Worst) Canadian Merchant Account Providers
                        March 29, 2016</p>
                    <p>Do you have a job that the average person doesn’t even know exists?
                        March 22, 2016</p>
                    <p>DigitalOcean launches first Canadian data centre in Toronto
                        February 22, 2016</p>
                </div>
                <div className="grow1">
                    <h2>Jobify Offices</h2>
                    <p>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282</p>
                    <p>Jobify Inc Canada. 545 Younge St, Suite 11 Toronto, Ontario M4K 6F4</p>
                </div>
        </div>
            <div className="footerBottom d-flex space-ev align-center">
                <h4>© 2022 CLASSIC - ALL RIGHTS RESERVED</h4>
                <div>   <a href="#"><ArrowCircleUpIcon style={{color: "white"}}/></a></div>
             <div>
                <a href="#"><FacebookIcon style={{color: "white", margin: "10px"}}/></a>
                <a href="#"><TwitterIcon style={{color: "white", margin: "10px"}}/></a>
                <a href="#"><YouTubeIcon style={{color: "white", margin: "10px"}}/></a>
                <a href="#"><AddToDriveIcon style={{color: "white", margin: "10px"}}/></a>
            </div>
            </div>
        </div>
    );
};

export default Footer;