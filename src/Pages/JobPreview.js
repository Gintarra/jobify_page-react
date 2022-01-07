import React from 'react';
import {useParams} from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button} from "@mui/material";
import JobsListDraw from "../Components/JobsListDraw";

const JobPreview = ({data}) => {
    const {id} = useParams();
    console.log(id)
    const oneJob = data.filter(x => x.id === Number(id));
    console.log(oneJob)
    return (
        <div className="d-flex column align-center">
            <div className="titleBox justify-center align-center d-flex column">
                <h1>{oneJob[0].title}</h1>
                <div className="d-flex justify-center align-center mrl20" style={{width: "40%"}}>
                    <div className="d-flex  justify-center align-center" style={{
                        backgroundColor: "green",
                        width: "120px",
                        height: "30px"
                    }}> {oneJob[0].type.toUpperCase()} </div>
                    <div className="d-flex mrl20">
                        <h3><LocationOnIcon/>{oneJob[0].region}, {oneJob[0].location}</h3>
                    </div>
                    <div className="d-flex mrl20 ">
                        <h3><HomeIcon/>{oneJob[0].title}</h3>
                    </div>

                </div>
            </div>

            <div className="d-flex space-ev" style={{borderBottom: "solid grey 1px", width: "80%"}}>
                <img className="logoLarge mrl20" src={oneJob[0].image} alt=""/>
                <div className="mr60"><h1>Job Categories</h1>
                    <h3><SellIcon/>{oneJob[0].cat}</h3>
                    <h1>Share Posting</h1>
                    <div><FacebookIcon style={{color: "blue"}}/><TwitterIcon
                        style={{color: "deepskyblue"}}/><YouTubeIcon style={{color: "red"}}/><AddToDriveIcon/></div>
                </div>

                <div className="d-flex column mrl20">
                    <h1>Company Social Profiles</h1>
                    <a href={oneJob[0].fb} style={{textDecoration: "none", color: "black"}}><FacebookIcon/> Facebook</a>
                    <Button variant="outlined"
                            style={{
                                color: "black",
                                border: "solid black 2px",
                                fontWeight: "bold",
                                fontSize: "14px",
                                margin: "20px 0 20px 0",
                                width: "170px"
                            }}>APPLY FOR JOB</Button>
                    <Button variant="outlined"
                            style={{
                                color: "#42ad3d",
                                border: "solid #42ad3d 2px",
                                fontWeight: "bold",
                                fontSize: "14px",
                                width: "270px"
                            }}>LOGIN TO BOOKMARK THIS JOB</Button>
                </div>
            </div>

            <div className="boxDesc d-flex column">
                <h2>Overview</h2>
                <img className="imgWorkers"
                     src="https://www.hochtief.com/fileadmin/karriere/stage_teaser/shutterstock_1022251501_stage.jpg"
                     alt=""/>
                <h2>Company Description</h2>
                <p>{oneJob[0].compDesc}</p>
                <h2>Job Description</h2>
                <p>{oneJob[0].desc}</p>
                <Button variant="outlined"
                        style={{
                            color: "black",
                            border: "solid black 2px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            margin: "20px 0 20px 0",
                            width: "170px"
                        }}>APPLY FOR JOB</Button>
                <h2>Related Jobs</h2>
                {data.filter(x => x.cat === oneJob[0].cat && x.id !== oneJob[0].id).length >0 ?
                <JobsListDraw dataArr={data.filter(x => x.cat === oneJob[0].cat && x.id !== oneJob[0].id)} /> : "Not Found" }
            </div>


        </div>
    );
};

export default JobPreview;