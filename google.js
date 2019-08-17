const axios = require('axios');
const KEY = process.env.GoogleAPIKey
const mode = "transit"
// const region;
// const suburb;
// const destination;

const getSuburbDuration = async (region, suburb, destination) => {
    region = stringFormat(region)
    suburb = stringFormat(suburb)
    destination = stringFormat(destination)
    //console.log(`${suburb}-${region}`)
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${suburb}-${region}&destination=${destination}&mode=${mode}&key=${KEY}`);
        console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }
}

const getFlatDuration = async (flat, region, suburb, destination) => {
    region = stringFormat(region)
    suburb = stringFormat(suburb)
    destination = stringFormat(destination)
    flat = stringFormat(flat)
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${flat}&destination=${destination}&mode=${mode}&key=${KEY}`);
        console.log(response);
        //console.log(response.data["routes"][0]);
        console.log(response.data.routes[0].legs[0].duration.text);
    } catch (error) {
        console.error(error);
    }

}

const stringFormat = (string) => {
    string = string.replace(/\W+/g, '-').toLowerCase();
    return string;
}

getSuburbDuration('Auckland', 'Kingsland', 'The University of Auckland')