import React from 'react';
import {Button} from "@mui/material";
import JobsListDraw from "../Components/JobsListDraw";
import SearchInputs from "../Components/SearchInputs";
import Companies from "../Components/Companies";

const HomePage = ({data}) => {
    return (
        <div>
            <div className="imgHome d-flex column align-center justify-center">
                <h1>The Easiest Way to Get Your New Job</h1>
                <h4>Find jobs, create trackable resumes and enrich your applications.</h4>
                <SearchInputs/>
            </div>

            <div>
              <Companies/>
            </div>

            <div className="imgTest d-flex align-center">
                <div className="grow1"/>
                <div className="grow1 m20">
                    <h1>Make Recruiting Your Competitive Advantage</h1>
                    <h4>Talent is a top priority for all startup founders and executives. Jobify offers a way to
                        completely optimize your entire recruiting process. Find better candidates, conduct more focused
                        interviews, and make data-driven hiring decisions.</h4>
                    <Button variant="contained" className="containedBtn">GET
                        STARTED</Button>
                </div>
            </div>

            <div>
                <h1 className="mt60" style={{textAlign: "center"}}>Hundreds of Jobs From All Over the Globe</h1>

                <JobsListDraw dataArr={data}/>
            </div>

            <div className="imgTest2 d-flex align-center">
                <div className="grow1 m20">
                    <h1>Join Thousands of Companies That Rely on Jobify</h1>
                    <h4>Jobify offers a way to completely optimize your entire recruiting process. Find better
                        candidates, conduct more focused interviews, and make data-driven hiring decisions.</h4>
                    <Button variant="contained"
                            className="containedBtn">GET
                        STARTED</Button>
                </div>
                <div className="grow1"/>
            </div>
            <div>
                <h1 style={{textAlign: "center"}}>Jobify Site Stats</h1>
                <h4 style={{textAlign: "center"}}>Here we list our site stats and how many people we’ve helped find a
                    job and companies have found
                    recruits. It's a pretty awesome stats area!</h4>
                <div className="d-flex m20 justify-center">
                    <div className="smallBox" style={{borderRight: "solid grey 1px"}}>
                        <p className="smallBoxH">20</p>
                        <p style={{textAlign: "center"}}>Jobs Posted</p>
                    </div>
                    <div className="smallBox" style={{borderRight: "solid grey 1px"}}><p className="smallBoxH">0</p>
                        <p style={{textAlign: "center"}}>Jobs Filled</p>
                    </div>
                    <div className="smallBox" style={{borderRight: "solid grey 1px"}}><p className="smallBoxH">2</p>
                        <p style={{textAlign: "center"}}>Companies</p>
                    </div>
                    <div className="smallBox"><p className="smallBoxH">20</p>
                        <p style={{textAlign: "center"}}>Members</p>
                    </div>
                </div>
            </div>

            <div className="imgBackground">
                <div className="imgBackgroundOpacity d-flex column align-center">
                    <h1>Kind Words From Happy Candidates</h1>
                    <h4>What other people thought about the service provided by
                        Jobify</h4>
                    <div style={{padding: "40px"}} className="d-flex">
                        <div className="d-flex column align-center m20" >
                            <div className="box">
                                <p>Without Jobify i’d be homeless, they found me a job and got me sorted out quickly
                                    with
                                    everything! Can’t quite believe the service level that they offer!</p>
                            </div>
                            <img className="imgPerson"
                                 src="https://cdn.ceoworld.biz/wp-content/uploads/2020/11/Elon-Musk-2.jpg" alt=""/>
                        </div>
                        <div className="d-flex column align-center m20" >
                            <div className="box">
                                <p>Without Jobify i’d be homeless, they found me a job and got me sorted out quickly
                                    with
                                    everything! Can’t quite believe the service level that they offer!</p>
                            </div>
                            <img className="imgPerson"
                                 src="https://cdn.ceoworld.biz/wp-content/uploads/2020/11/Elon-Musk-2.jpg" alt=""/>
                        </div>
                        <div className="d-flex column align-center m20" >
                            <div className="box">
                                <p>Without Jobify i’d be homeless, they found me a job and got me sorted out quickly
                                    with
                                    everything! Can’t quite believe the service level that they offer!</p>
                            </div>
                            <img className="imgPerson"
                                 src="https://cdn.ceoworld.biz/wp-content/uploads/2020/11/Elon-Musk-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex column align-center" >
                <h1>Recent News Articles</h1>
                <h4>Fresh job related news content posted each day.</h4>
                <div className="d-flex justify-center">
                    <div className="articleBox">
                        <img
                            src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
                            alt=""/>
                        <h2>The Best (and Worst) Canadian Merchant Account Providers</h2>
                        <p>A job is a regular activity performed in exchange for payment. A person usually begins a job
                            by
                            becoming an employee, volunteering, or starting a business. The duration of a job may range
                            from
                            an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person
                            is</p>
                        <Button variant="contained"
                                className="containedBtn">CONTINUE
                            READING</Button>
                    </div>
                    <div className="articleBox">
                        <img
                            src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
                            alt=""/>
                        <h2>The Best (and Worst) Canadian Merchant Account Providers</h2>
                        <p>A job is a regular activity performed in exchange for payment. A person usually begins a job
                            by
                            becoming an employee, volunteering, or starting a business. The duration of a job may range
                            from
                            an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person
                            is</p>
                        <Button variant="contained"
                                className="containedBtn">CONTINUE
                            READING</Button>
                    </div>
                    <div className="articleBox">
                        <img
                            src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
                            alt=""/>
                        <h2>The Best (and Worst) Canadian Merchant Account Providers</h2>
                        <p>A job is a regular activity performed in exchange for payment. A person usually begins a job
                            by
                            becoming an employee, volunteering, or starting a business. The duration of a job may range
                            from
                            an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person
                            is</p>
                        <Button variant="contained"
                                className="containedBtn">CONTINUE
                            READING</Button>
                    </div>


                </div>
            </div>

        </div>
    )
        ;
}


export default HomePage;