const axios = require('axios');
const KEY = process.env.GoogleAPIKey
const mode = "transit"
// const region;
// const suburb;
// const destination;

const getSuburbDuration = async (region, suburb, destination) => {
    
    //console.log(`${suburb}-${region}`)
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${suburb}-${region}&destination=${destination}&mode=${mode}&key=${KEY}`);
        //console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }
}

const getFlatDuration = async (flat, region, suburb, destination) => {
    
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${flat}&destination=${destination}&mode=${mode}&key=${KEY}`);
        //console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }

}

const getRegionOfDestination = ()=>{
    //call places API
}

//getSuburbDuration('Auckland', 'Kingsland', 'The University of Auckland')

module.exports = {
    getSuburbDuration,
    getFlatDuration,
    getRegionOfDestination
}