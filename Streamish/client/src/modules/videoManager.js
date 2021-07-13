import { getToken } from "./authManager";

const baseUrl = '/api/video';
const getWithCommentsUrl = '/api/video/GetWithComments'
const searchUrl = "/api/Video/search";

export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(getWithCommentsUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};

export const videoSearch = (searchString) => {
    return getToken().then((token) => {
        return fetch(`${searchUrl}?q=${searchString}&sortDesc=true`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};


export const addVideo = (video) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("An unknown error occurred while trying to save a new quote.");
            }
        });
    });
};

export const getVideoById = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetVideoByIdWithComments?id=${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};


export const getProfileByIdWithVideos = (id) => {
    return getToken().then((token) => {
        return fetch(`/api/UserProfile/GetUserProfileByIdWithVideos?id=${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};
