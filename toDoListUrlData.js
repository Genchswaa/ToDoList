// const API_KEY = "e6deb05a8dd30c00c7018a19b386ddf6";

async function getDataFromEndPoint(){
    const apiUrl = `Endpoint: https://wincacademydatabase.firebaseio.com//${gian}/tasks.json`;
    try {
    const res = await fetch(apiUrl, {method: "GET"});
    const data = await res.json();
    return data;
    } catch (err) {
        console.log(err)
    }
};
