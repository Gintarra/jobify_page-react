import React from 'react';
import JobInputs from "../Components/JobInputs";

const PostJob = ({post}) => {

    function onePost(obj){
        post(obj);
    }
    return (
        <div>
            <JobInputs data={onePost}/>
        </div>
    );
};

export default PostJob;