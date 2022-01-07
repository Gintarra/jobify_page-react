import React from 'react';

const Companies = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Companies We've Helped</h1>
            <h4 style={{textAlign: "center"}}>Some of the companies we've helped recruit excellent applicants over
                the years.</h4>
            <div className="d-flex space-ev mAll40">
                <img className="companyLogo"
                     src="http://images6.fanpop.com/image/photos/39800000/Burger-King-Logo-6-nintendofan12-5-39800951-300-300.png"
                     alt=""/>
                <img className="companyLogo"
                     src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2019/05/Toyota-logo-min.png"
                     alt=""/>
                <img className="companyLogo"
                     src="https://i.pinimg.com/originals/17/0f/69/170f69af4e3aaf3fd6a82429eced5780.png" alt=""/>
                <img className="companyLogo"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7cXwkj8ZumDjkSoJznl-8GUqhxPXAKPA_fhjMMmu8ZrUpcjFFmQ0uY53XF6VOSmH3Io&usqp=CAU"
                     alt=""/>
            </div>
        </div>
    );
};

export default Companies;