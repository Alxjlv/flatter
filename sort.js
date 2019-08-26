const google = require('./google');
const trademe = require('./trademe');
//const requester = require('./requester'); //may decide to export some methods from requester


/*
 Future upgradeability - database with suburb durations? or just a text file in master that gets updated and read?
 This database would carry relational data about each suburb vs other suburbs - allow some preprocessing
 API calls are still less costly though
*/
const sortTrademeList = async (region,destination,district,duration) => {

    //Retrieve trademe list
    //Is there some way to increase the number of flats retrieved in one search?

    /*turn into a list of objects with several fields - this method exists in requester but may need refactoring
    This would require some formatting to display to the front end
    these fields are: 
    transit duration (will initially be empty)
    Address
    Region
    suburb
    price
    number of bedrooms
    image link
    title
    listing id*/

    //Do transit duration calculations on each flat in the list

    //sort this list of objects by duration primarily, then possibly price

    //return this list

}