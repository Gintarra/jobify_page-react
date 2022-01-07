import React, {useRef, useState} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const JobInputs = ({data}) => {
    const navigate = useNavigate();
    const [getError, setError] = useState(null);
    const inputs = {
        title: useRef(),
        email: useRef(),
        pass: useRef(),
        pass2: useRef(),
       company: useRef(),
        location: useRef(),
        apEmail: useRef(),
        region: useRef(),
        type: useRef(),
        image: useRef(),
        desc: useRef(),
        compDesc: useRef(),
        cat: useRef(),
        fb: useRef(),
        lnkd: useRef()
    }
    function getData(){
        const values = {
            title: inputs.title.current.value,
            email: inputs.email.current.value,
            pass: inputs.pass.current.value,
            pass2: inputs.pass2.current.value,
            company: inputs.company.current.value,
            location: inputs.location.current.value,
            apEmail: inputs.apEmail.current.value,
            region: inputs.region.current.value,
            type: inputs.type.current.value,
            image: inputs.image.current.value,
            desc: inputs.desc.current.value,
            compDesc: inputs.compDesc.current.value,
            cat: inputs.cat.current.value,
            fb: inputs.fb.current.value,
            lnkd: inputs.lnkd.current.value
        }

        if(values.title.length < 3 || values.title.length > 100) return setError(true)
        if(!values.image.includes('http')) return setError(true)
        if(values.desc.length < 10 || values.desc.length > 200) return setError(true)
        if(values.email.length < 5 ) return setError(true)
        if(values.pass.length < 5 ) return setError(true)
        if(values.pass2.length < 5 ) return setError(true)
        if(values.company.length < 5 ) return setError(true)
        if(values.location.length < 5 ) return setError(true)
        if(values.apEmail.length < 5 ) return setError(true)
        if(values.region.length < 5 ) return setError(true)
        if(values.type.length < 5 ) return setError(true)
        if(values.compDesc.length < 5 ) return setError(true)


        setError(false)
        console.log(values)
        data(values);
        navigate("/jobs-list");
    }

    return (
        <div className="d-flex column align-center m40">
            <p>YOUR EMAIL</p>
            <input className="inputJob" type="text" placeholder="you@youdomain.com" ref={inputs.email}/>
            <p>PASSWORD</p>
            <input className="inputJob" type="text" ref={inputs.pass}/>
            <p>VERIFY PASSWORD</p>
            <input className="inputJob" type="text" ref={inputs.pass2}/>
            <p>COMPANY</p>
            <input className="inputJob" type="text" placeholder="company name" ref={inputs.company}/>
            <p>JOB TITLE</p>
            <input className="inputJob" type="text" placeholder="Art Director" ref={inputs.title}/>
            <p>LOCATION</p>
            <input className="inputJob" type="text" placeholder="e.g. Kaunas" ref={inputs.location}/>
            <p>APPLICATION EMAIL/URL</p>
            <input className="inputJob" type="text" placeholder="you@youdomain.com or www.company.com" ref={inputs.apEmail}/>
            <p>JOB REGION</p>
            <select name="browser" id="browser" className="inputJobSelect"  defaultValue="All regions" ref={inputs.region}>
                <option value="All regions" >All regions</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Klaipėda">Klaipėda</option>
                <option value="Panevėžys">Panevėžys</option>
                <option value="Šiauliai">Šiauliai</option>
            </select>
            <p>JOB TYPE</p>
            <select name="typeJob" className="inputJobSelect" defaultValue="Full time" ref={inputs.type}>
                <option value="Full time" >Full time</option>
                <option value="Part time">Part time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
            </select>
            <p>JOB CATEGORY</p>
            <select required name="catJob" className="inputJobSelect"  ref={inputs.cat}>
                <option value="" disabled selected hidden >Choose a category...</option>
                <option value="Design" >Design</option>
                <option value="Development">Development</option>
                <option value="Sales">Sales</option>
            </select>
            <p>FEATURED IMAGE</p>
            <input className="inputJob" type="text" placeholder="URL" ref={inputs.image}/>
            <p>DESCRIPTION</p>
            <textarea className="inputJob" ref={inputs.desc}/>
            <h1>Company Details</h1>
            <p>DESCRIPTION</p>
            <textarea className="inputJob" ref={inputs.compDesc}/>
            <p>FACEBOOK USERNAME (OPTIONAL)</p>
            <input className="inputJob" type="text" placeholder="yourcompany" ref={inputs.fb}/>
            <p>LINKEDIN USERNAME (OPTIONAL)</p>
            <input className="inputJob" type="text" placeholder="yourcompany" ref={inputs.lnkd}/>
            {getError && <h3>Validation error</h3>}
            <Button variant="contained"
                    style={{backgroundColor: "#42ad3d", fontWeight: "bold", fontSize: "18px"}} onClick={() => getData()}>SAVE</Button>
        </div>
    );
};

export default JobInputs;