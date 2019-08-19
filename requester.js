const google = require('./google')

const trademe = require('./trademe')
let closeEnough = []
//const ListingID;

// const testTradeMe = async () =>{
//     trademelist = await trademe.getFlatList("Auckland","Auckland")
//     console.log(trademelist)
// }

// testTradeMe()

const sortBySuburb = async (region,destination,district,duration) =>{
    //cycle through trademe list
    //get suburb
    let trademelist = await trademe.getFlatList(region,district);

    
    //console.log(trademelist, typeof trademelist)
    var promiseList = []
    trademelist.forEach((element) => {
        promiseList.push(
            google.getSuburbDuration(region,element.Suburb,destination).then((duration)=>{
                obj={}
                obj.suburb = element.Suburb;
                obj.suburbID = element.SuburbId;
                obj.duration = duration;
                //obj.numListings  = 1;
                return obj
            })

            
        )
    })
    suburblist=await Promise.all(promiseList).then((v)=>{
        v.forEach((item) => {
            if (item.duration > duration) {
                console.log("deleted");
            } else {
                closeEnough.push(item);
                console.log("Added");
            }
        });
        closeEnough.sort(function(a,b){
            if(a.duration > b.duration){
                return 1;
            }
            if(a.duration < b.duration){
                return -1;
            }
            return 0;
        })
        
        return v})

    console.log(suburblist)

    return suburblist
}
sortBySuburb("Auckland", "GridAKL", "Auckland","50").then((d) => {
    console.log(closeEnough) //refactor to remove closeEnough list/make it so it isn't a global variable
});




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
const gridList=async(region,district, suburbID,destination)=>{
  var flatslist=await trademe.getFlatList(region,district, "");
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
  gridlist= await Promise.all(promiseList ).then(function(values) {
    //console.log(values);
    return values
  });
return gridlist
}

//GridList("Auckland","Auckland City",282,"GridAkl").then((d)=>{console.log("list",d)});

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
module.exports= {gridList}
