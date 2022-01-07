import './App.css';
import JobsList from "./Pages/JobsList";
import PostJob from "./Pages/PostJob";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import JobPreview from "./Pages/JobPreview";
import {MyContext} from "./Context/MyContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const arrJobs = [{
        title: "Art Director",
        email: "email@mail.com",
        pass: 222,
        pass2: 222,
        company: "UAB Company",
        location: "Lithuania",
        apEmail: "emailComp@company.lt",
        region: "Vilnius",
        type: "Part time",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPpBs0HjcK00K3VKKvuTpIZBuv5A2-FzR1b5sVchpkTFErD-ZatfmluB3sxVKPE1rvSY&usqp=CAU",
        desc: "darbas kaip darbas",
        compDesc: "Labai gera kompanija",
        cat: "Design",
        fb: "company.facebook",
        lnkd: "company.linkedin",
        id: 1
    }, {
        title: "Director",
        email: "email@mail.com",
        pass: 222,
        pass2: 222,
        company: "UAB Company",
        location: "Lithuania",
        apEmail: "emailComp@company.lt",
        region: "Vilnius",
        type: "Part time",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPpBs0HjcK00K3VKKvuTpIZBuv5A2-FzR1b5sVchpkTFErD-ZatfmluB3sxVKPE1rvSY&usqp=CAU",
        desc: "darbas kaip darbas",
        compDesc: "Labai gera kompanija",
        cat: "Design",
        fb: "company.facebook",
        lnkd: "company.linkedin",
        id: 2
    },
        {
            title: "Web Designer",
            email: "email@mail.com",
            pass: 222,
            pass2: 222,
            company: "UAB Company",
            location: "Lithuania",
            apEmail: "emailComp@company.lt",
            region: "Kaunas",
            type: "Full time",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPpBs0HjcK00K3VKKvuTpIZBuv5A2-FzR1b5sVchpkTFErD-ZatfmluB3sxVKPE1rvSY&usqp=CAU",
            desc: "darbas labai geras",
            compDesc: "Kompanija normali",
            cat: "Development",
            fb: "company.facebook",
            lnkd: "company.linkedin",
            id: 3
        },
        {
            title: "Traveler",
            email: "email@mail.com",
            pass: 222,
            pass2: 222,
            company: "UAB Company",
            location: "Lithuania",
            apEmail: "emailComp@company.lt",
            region: "Šiauliai",
            type: "Internship",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPpBs0HjcK00K3VKKvuTpIZBuv5A2-FzR1b5sVchpkTFErD-ZatfmluB3sxVKPE1rvSY&usqp=CAU",
            desc: "darbas - keliauti po pasauli",
            compDesc: "siulome kelioniu draudima, sveikatos draudima, ir maitinima nemokamai",
            cat: "Development",
            fb: "company.facebook",
            lnkd: "company.linkedin",
            id: 4
        }];
    const [getPosts, setPosts] = useState(arrJobs)
    const [getN, setN] = useState(5)

    function allPostsToArray(arg) {
        arg.id = getN;
        setPosts(([...getPosts, arg]))
        setN(getN + 1);
    }

    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>

                    <Route path="/" element={<HomePage data={getPosts}/>}/>
                    <Route path="/jobs-list" element={<JobsList dataAll={getPosts}/>}/>
                    <Route path="/post-a-job" element={<PostJob post={allPostsToArray}/>}/>
                    <Route path="/job-full-preview/:id" element={<JobPreview data={getPosts}/>}/>

                </Routes>
                <Footer/>
            </BrowserRouter>


        </div>
    );
}

export default App;
