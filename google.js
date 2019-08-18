const axios = require('axios');
const KEY = process.env.GoogleAPIKey
const mode = "transit"
// const region;
// const suburb;
// const destination;

const getSuburbDuration = async (region, suburb, destination) => {
    
    //console.log(`${suburb}-${region}`)
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?`,{
            params: {
                "origin": suburb +"-" + region,
                "destination": destination,
                "mode":"transit",
                "key":KEY
            }
        })
        //console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }
}

const getFlatDuration = async (flat, region, suburb, destination) => {
    
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?`,{
            params: {
                "origin": flat,
                "destination": destination,
                "mode":"transit",
                "key":KEY
            }
        })
        //console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }

}

// const getRegionOfDestination = async (destination)=>{
//     //call places API
//     try{
//         const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?`,{ 
//             params: {
//                 "origin": destination,
//                 "destination": destination,
//                 "key": KEY
//             }
//         })
//         let data = response.data.routes[0].legs[0].end_address
//         console.log(data);
//         let dataArr = data.split(', ')
//         console.log(dataArr[(dataArr.length-3)])
//         //console.log(response)
//     }catch(error){
//         console.log(error)
//     }

// }

//getSuburbDuration('Auckland', 'Kingsland', 'The University of Auckland')
// getRegionOfDestination("GridAkl")
// getRegionOfDestination("morningside-auckland")


module.exports = {
    //getSuburbDuration,
    //getFlatDuration,
    //getRegionOfDestination
}