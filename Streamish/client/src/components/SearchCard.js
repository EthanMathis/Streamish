import React, { useEffect, useState } from "react";
import Video from './Video';


const SearchCard = ({ result }) => {

    return (
        <div>
            <Video video={result} />
        </div>
    );
};

export default SearchCard;