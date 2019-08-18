const google = require('./google')
const trademe =  require('./trademe')
var tooFar;
var closeEnough;
var ListingID;

const sortBySuburb = (region,destination,duration) =>{
    //cycle through trademe list (sorted by suburb)
    //get suburb
    trademelist.forEach(element => {
        suburb = element.Suburb
        if( (tooFar.includes(suburb))||(closeEnough.includes(suburb)) ){
            console.log("element already checked")
        }else{
            region = stringFormat(region)
            suburb = stringFormat(suburb)
            destination = stringFormat(destination)
            let suburbDuration = google.getFlatDuration(region,suburb,destination)
        }
    });

}
const GridList=async(region,district, suburbID,destination)=>{
  flatslist=await trademe(region,district, suburbID);
  console.log(flatslist)
  flatslist.forEach(async(flat)=>{
    flatDispObj={}
    flatDispObj.title=flat.Title
    flatDispObj.flatID=flat.ListingId
    flatDispObj.price=flat.PriceDisplay
    suburb = flat.Suburb
    flatDispObj.duration= await google.getFlatDuration(flat.address, region, suburbID, destination)
    console.log(flatDispObj)
  })
}
GridList("Auckland","Auckland",282,"GridAkl")


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


//console.log(suburbDuration)
