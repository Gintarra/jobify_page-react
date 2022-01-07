import React, {useEffect, useRef, useState} from 'react';
import {Button} from "@mui/material";
import JobsListDraw from "../Components/JobsListDraw";


const JobsList = ({dataAll}) => {

    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);
    const [checked3, setChecked3] = React.useState(true);
    const [checked4, setChecked4] = React.useState(true);
    const [getPostsFirst, setPostsFirst] = useState(dataAll)
    const [getPosts, setPosts] = useState(dataAll);
    const keyWords = {
        search: useRef(),
        location: useRef(),
        cat: useRef()
    }

    let arrChecked = [checked1, checked2, checked3, checked4];
    arrChecked = [checked1 === true ? "Freelance" : false, checked2 === true ? "Part time" : false, checked3 === true ? "Internship" : false, checked4 === true ? "Full time" : false];


    let filteredPosts;
    const ar = [];
    ar.push(dataAll[1], dataAll[2])



    function filterKey() {
        const keyWordValue = keyWords.search.current.value.toLowerCase();
        const keyLocation = keyWords.location.current.value;
        const keyCategory = keyWords.cat.current.value;


        console.log(keyWordValue)
        console.log(keyLocation)
        console.log(keyCategory)
        if (!!keyWordValue || !!keyLocation) {
            if (keyLocation === "All regions") {
                filteredPosts = dataAll.filter(x => (x.title.toLowerCase().includes(keyWordValue)) && x.cat === keyCategory);
                console.log(filteredPosts, "ateina")
                setPosts(filteredPosts);
            } else {
                filteredPosts = dataAll.filter(x => (x.title.toLowerCase().includes(keyWordValue) && x.region === keyLocation && x.cat === keyCategory));
                console.log(filteredPosts, "first filter")
                setPosts(filteredPosts);
            }
        } else {

        }

    }

    const handleChange = (arg) => {
        if (arg === 1) setChecked1(!checked1);
        if (arg === 2) setChecked2(!checked2);
        if (arg === 3) setChecked3(!checked3);
        if (arg === 4) setChecked4(!checked4);
        console.log(checked1)



    };
    useEffect(() => {
        arrChecked = [checked1 === true ? "Freelance" : false, checked2 === true ? "Part time" : false, checked3 === true ? "Internship" : false, checked4 === true ? "Full time" : false];

        console.log(arrChecked, "array checked")
        console.log(checked1, "checked 1")
        let filterByType = getPostsFirst;
        let filteredDataByType = [];

        if (arrChecked[0] === "Freelance" && arrChecked[1] === "Part time" && arrChecked[2] === "Internship" && arrChecked[3] === "Full time") {
            filteredDataByType.push(...getPostsFirst);
            console.log(filteredDataByType)
            setPosts(filteredDataByType);
            return;
        }
        for (let i = 0; i < filterByType.length; i++) {
             if (filterByType[i].type === arrChecked[0]) {
                filteredDataByType.push(filterByType[i]);
                console.log("first if")
            } else if (filterByType[i].type === arrChecked[1]) {
                filteredDataByType.push(filterByType[i]);
                console.log("second if")
            } else if (filterByType[i].type === arrChecked[2]) {
                filteredDataByType.push(filterByType[i]);
                console.log("third if")
            } else if (filterByType[i].type === arrChecked[3]) {
                filteredDataByType.push(filterByType[i]);
                console.log("fourth if")
            }
        }

        setPosts(filteredDataByType);
        console.log(filteredDataByType, "data")

    }, [checked1, checked2, checked3, checked4])


    const Checkbox = ({label, value, onChange}) => {
        return (
            <label style={{margin: "20px"}}>
                <input type="checkbox" checked={value} onChange={onChange}/>
                {label}
            </label>
        );
    };
    console.log(getPosts, "getPosts")
    return (
        <div className="d-flex column align-center">
            <img className="imgMap"
                 src="https://cdn-assets.alltrails.com/static-map/production/best/location/states/lithuania-vilnius-forest-1331-20211119110112000000-763x240-1.png"
                 alt=""/>
            <div style={{marginTop: "40px"}}>
                <div className="d-flex space-ev " style={{width: "1000px", padding: "20px", backgroundColor: "green"}}>
                    <input type="text" placeholder="Keywords" className="inputSearch"
                           ref={keyWords.search}/>
                    <select name="browser" id="browser" className="inputSearch" defaultValue="All regions"
                            ref={keyWords.location}>
                        <option value="All regions">All regions</option>
                        <option value="Kaunas">Kaunas</option>
                        <option value="Vilnius">Vilnius</option>
                        <option value="Klaipėda">Klaipėda</option>
                        <option value="Panevėžys">Panevėžys</option>
                        <option value="Šiauliai">Šiauliai</option>
                    </select>

                    <select name="cat" id="cat" className="inputSearch" ref={keyWords.cat}>
                        <option value="" hidden>Choose a category...</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    <Button onClick={() => filterKey()} variant="contained"
                            className="containedBtn">SEARCH
                    </Button>
                </div>
                <div className="checkBox d-flex align-center">
                    <Checkbox
                        label="FREELANCE"
                        value={checked1}
                        onChange={() => handleChange(1)}
                    />
                    <Checkbox
                        label="PART TIME"
                        value={checked2}
                        onChange={() => handleChange(2)}
                    />
                    <Checkbox
                        label="INTERNSHIP"
                        value={checked3}
                        onChange={() => handleChange(3)}
                    />
                    <Checkbox
                        label="FULL TIME"
                        value={checked4}
                        onChange={() => handleChange(4)}
                    />
                </div>
            </div>
            <JobsListDraw dataArr={getPosts}/>


        </div>
    );
};

export default JobsList;