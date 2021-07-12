import React, { useEffect, useState } from "react";
import Video from './Video';


const SearchCard = ({ result }) => {

    return (
        <div>
            <Video video={result} userProfile={result.userProfile} />
        </div>
    );
};

export default SearchCard;