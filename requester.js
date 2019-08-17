const google = require('./google')

const sortBySuburb = (region,destination) =>{
    //cycle through trademe list (sorted by suburb)
    region = stringFormat(region)
    suburb = stringFormat(suburb)
    destination = stringFormat(destination)

    let suburbDuration = google.getSuburbDuration(region,suburb,destination)

}

const specificFlatDetails = (flat,destination) =>{
    //get region and suburb from trademe
    region = stringFormat(region)
    suburb = stringFormat(suburb)
    destination = stringFormat(destination)
    flat = stringFormat(flat)
    let flatDuration = google.getFlatDuration(flat,region,suburb,destination)
}

const stringFormat = (string) => { //removes whitespace in the input
    string = string.replace(/\W+/g, '-').toLowerCase();
    return string;
}


console.log(suburbDuration)