getDataFromEndPoint();

async function waitForData() {
    
    const retrieveData = await getDataFromEndPoint();
    console.log(retrieveData)

};
waitForData();


// initele lijst van database
// {
//     "tasks": {
//         "-M3v9Osy5puSFLoWuE_1": {
//             "description": "ik moet nog mijn sokken wassen",
//             "done": true
//         }
//     }
// }

// gegenereerde taken postman
//"name": "-M3wVIG7j1b61JKU0QaL"
//"name": "-M3wVfk0-AUkDk_UuuCX"
//"name": "-M3wVjiB_YfMsQ0WCxOf"

