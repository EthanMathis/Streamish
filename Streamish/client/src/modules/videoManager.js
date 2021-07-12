const baseUrl = '/api/video';
const getWithCommentsUrl = '/api/video/GetWithComments'
const searchUrl = "/api/Video/search";

export const getAllVideos = () => {
    return fetch(getWithCommentsUrl)
        .then((res) => res.json())
};

export const videoSearch = (searchString) => {
    return fetch(`${searchUrl}?q=${searchString}&sortDesc=true`)
        .then((res) => res.json())
}

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};