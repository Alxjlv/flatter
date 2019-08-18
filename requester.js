const google = require('./google')

const trademe = require('./trademe')
let tooFar = []
let closeEnough = []
//const ListingID;


const sortBySuburb = async (region,destination,duration,district) =>{
    //cycle through trademe list (sorted by suburb)
    //get suburb
    trademelist = await trademe.getFlatList(region,district);
    //console.log(trademelist)
    trademelist.List.forEach(async(element) => {
        suburb = element.Suburb
        if(tooFar.includes(suburb)){
            console.log("element too far");

        }else if(checkCloseEnough(suburb)){
            console.log("added 1 flat");

        }else{
            region = stringFormat(region)
            suburb = stringFormat(suburb)
            destination = stringFormat(destination)

            let suburbDuration = await google.getSuburbDuration(region,suburb,destination)
            console.log("Would call API here")
            console.log(suburbDuration)

            //get number of listings in that suburb
            //add json to suburb
            //suburbDuration = "20 mins"
            if(suburbDuration > duration){
                tooFar.push(suburb)
                console.log(tooFar)
            }else{
                temp = {"suburb": suburb,"duration": suburbDuration,"numListings":1}
                closeEnough.push(temp)
                console.log(closeEnough)
            }

        }
    });

}

sortBySuburb("Auckland","GridAKL","59","Auckland")

const checkCloseEnough = (suburb) => {
    if (closeEnough && closeEnough.length) {
        console.log("array is empty")
        return false
    } else {
        closeEnough.forEach(element => {
            if (element.suburb == suburb) {
                element.numListings = element.numListings + 1
                return true
            }
        });
        return false;
    }
}
const GridList=async(region,district, suburbID,destination)=>{
  var flatslist=await trademe.getFlatList(region,district, suburbID);
  var promiseList=[]
  flatslist.forEach((flat)=>{

    promiseList.push(
      google.getFlatDuration(flat.address, region, suburbID, destination).
    then((duration)=>{
      flatDispObj={}
      flatDispObj.title=flat.Title
      flatDispObj.flatID=flat.ListingId
      flatDispObj.price=flat.PriceDisplay
      flatDispObj.duration=duration
      flatDispObj.picture = flat.PictureHref
      return flatDispObj;
    }
  ))})
  gridlist= Promise.all(promiseList ).then(function(values) {
    //console.log(values);
    return values
  });
return gridlist
}
GridList("Auckland","Auckland City",282,"GridAkl").then((d)=>{console.log("list",d)});


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
