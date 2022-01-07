import React, {useEffect, useState} from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const JobsListDraw = ({dataArr}) => {
    console.log(dataArr, "from draw")
    const [getData, setData] = useState([]);
    let loadingMoreArray1 = [];
    const [getN, setN] = useState(0);
    const [getShow, setShow] = useState(true)
    const navigate = useNavigate();


    // useEffect(() => {
    //     loadingMoreArray1.push(dataArr[0]);
    // }, [])

    useEffect(() => {
        //setData(dataArr.slice(0, 1))
        // setData(loadingMoreArray1);
        const newAr = dataArr[0];
        setData(dataArr)
    })

    function loadingMore() {
        setN(getN + 1);
        setData(dataArr);
        setShow(false);
    }

    function jobPreview(arg) {
        navigate("/job-full-preview/" + arg.id);
        window.scrollTo(0, 0);
        console.log(arg)
    }

    return (
        <div className="d-flex column align-center m40">
            <div className="m20" style={{border: "solid grey 1px", borderRadius: "5px", width: "1000px"}}>
                {getData.map((x, index) => <div key={index} className="jobBox d-flex align-center"
                                                onClick={() => jobPreview(x)}>
                    <div className="hoverEffect"/>
                    <div className="d-flex grow2 align-center ml20">
                        <img className="companyLogo" src={x.image} alt=""/>
                        <h1>{x.title}</h1>
                    </div>
                    <div className="d-flex grow1">
                        <h3><LocationOnIcon/>{x.region}, {x.location}</h3></div>
                    <div className="d-flex grow1 mr20 justify-center align-center" style={{
                        backgroundColor: "green",
                        width: "160px",
                        height: "30px",
                        borderRadius: "10px"
                    }}> {x.type.toUpperCase()} </div>
                </div>)}
            </div>
            {getShow && <Button variant="outlined" className="outlinedBtn"
                                onClick={loadingMore}
            >LOADING
                MORE</Button>}

        </div>
    );
};

export default JobsListDraw;