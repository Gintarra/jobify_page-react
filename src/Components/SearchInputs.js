import React from 'react';
import {Button} from "@mui/material";

const SearchInputs = () => {
    return (

            <div className="d-flex space-ev " style={{width: "70%"}}>
                <input type="text" placeholder="Keywords" className="inputSearch"/>
                <select name="browser" id="browser" className="inputSearch">
                    <option value="All regions">All regions</option>
                    <option value="Kaunas">Kaunas</option>
                    <option value="Vilnius">Vilnius</option>
                    <option value="Klaipėda">Klaipėda</option>
                    <option value="Panevėžys">Panevėžys</option>
                    <option value="Šiauliai">Šiauliai</option>
                </select>

                <select name="cat" id="cat" className="inputSearch">
                    <option value=""  hidden >Choose a category...</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <Button variant="contained" className="containedBtn"
                        >SEARCH
                    JOBS</Button>
            </div>

    );
};

export default SearchInputs;